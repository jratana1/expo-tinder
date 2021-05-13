/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import iconSet from '@expo/vector-icons/build/Fontisto';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import SwipeScreen from '../screens/SwipeScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList, SwipeParamList } from '../types';

import { Icon } from 'react-native-elements'


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Profile"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon type='ionicon' name="person-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="List"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon type='ionicon' name="list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Swipe"
        component={SwipeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon type='font-awesome-5' name="utensils" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { type: string; name: string; color: string}) {
return <Icon size={24} style={{ marginBottom: -3 }} {...props}/>
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'List' }}
      />
    </TabTwoStack.Navigator>
  );
}

const SwipeStack = createStackNavigator<SwipeParamList>();

function SwipeNavigator() {
  return (
    <SwipeStack.Navigator>
      <SwipeStack.Screen
        name="SwipeScreen"
        component={SwipeScreen}
        options={{ headerTitle: 'Swipe' }}
      />
    </SwipeStack.Navigator>
  );
}
