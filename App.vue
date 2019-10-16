<template>
  <app-navigator>
    <push-controller/>
  </app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import HomeScreen from "./src/screens/HomeScreen.vue";
import DetailsScreen from "./src/screens/DetailsScreen.vue";
import PushController from './pushController';

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      title: 'Home',
      navigationOptions: {
       header: null,
      },
    },
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator, PushController, },
}
</script>

<style>
.container {
  background-color: black;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
