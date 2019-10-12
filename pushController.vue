<template>
</template>

<script>
import PushNotification from 'react-native-push-notification';

export default {
  name: 'push-controller',
  created: function () {
    PushNotification.configure({
     onNotification: function(notification) {
      console.log("NOTIFICATION:", notification);
     },
    //  requried for remote notifications
    //  senderId: 'your gcm or fcm senderId generally it is 12 digit number'
    });
  }
}
</script>
