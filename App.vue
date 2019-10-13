<template>
  <view class="container">
    <text class="text-color-primary">going prepare code for push notifications</text>
    <touchable-opacity :on-press="onPressButton">
      <text> send notification </text>
    </touchable-opacity>
    <text>{{ count }}</text>
     <button
        :on-press="increment"
        title="increment"
        color="#841584"
        accessibility-label="press button to increment"
    />
      <button
        :on-press="decrement"
        title="decrement"
        color="red"
        accessibility-label="press button to decrement"
    />
    <push-controller/>
  </view>
</template>

<script>
import PushController from './pushController';
import PushNotification from 'react-native-push-notification';
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    PushController
  },
  computed: {
    ...mapState([
      'count'
    ]),
  },
  methods: {
    onPressButton: () => {
      PushNotification.localNotificationSchedule({
        message: "My Notification Message",
        date: new Date(Date.now()),
      });
    },
     ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
