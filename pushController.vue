<template>
</template>

<script>
import PushNotification from 'react-native-push-notification';

export default {
  name: 'push-controller',
  created: function () {
    console.log("calling========");
    PushNotification.configure({
     onNotification: function(notification) {
      console.log("NOTIFICATION:", notification);
     }
    });
  }
}
</script>
