<template>
  <view class="container">
    <text class="text-color-primary">going prepare code for push notifications</text>
    <touchable-opacity :on-press="onPressButton">
      <text> send notification </text>
    </touchable-opacity>
    <push-controller/>
  </view>
</template>

<script>
import PushController from './pushController';
import PushNotification from 'react-native-push-notification';
export default {
  components: {
    PushController
  },
  methods: {
    onPressButton: () => {
      PushNotification.localNotificationSchedule({
        message: "My Notification Message",
        date: new Date(Date.now()),
      });
    }
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
