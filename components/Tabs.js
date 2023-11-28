import React from "react";
import Home from "../screens/Home";
import Map from "../screens/Map";
import Bags from "../screens/Bags";
import Profile from "../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    //   screenOptions={{
    //     tabBarActiveTintColor: "tomato",
    //     tabBarInactiveTintColor: "gray",
    //     tabBarStyle: {
    //       backgroundColor: "tan",
    //     },
    //     headerStyle: {
    //       backgroundColor: "tan",
    //     },
    //     headerTitleStyle: {
    //       fontWeight: "bold",
    //       fontSize: 25,
    //       color: "beige",
    //     },
    //   }}
    >
      <Tab.Screen name={"Home"} component={Home}></Tab.Screen>
      <Tab.Screen name={"Map"} component={Map}></Tab.Screen>
      <Tab.Screen name={"Bags"} component={Bags}></Tab.Screen>
      <Tab.Screen name={"Profile"} component={Profile}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
