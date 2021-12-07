import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import ShoppingCart from "../screens/ShoppingCart";

const {Navigator,Screen} = createNativeStackNavigator();

export const AppRoutes = ()=>{
  return (
    <Navigator
      initialRouteName={"Home"}
      screenOptions={{
          headerShown:false
      }}
    >
      <Screen
          name="Home"
          component={Home}
      />
      <Screen
          name="ShoppingCart"
          component={ShoppingCart}
      />
    </Navigator>
  );
};