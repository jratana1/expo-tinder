/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import *  as React from 'react';
import { useState } from 'react';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import ListScreen from '../screens/ListScreen';
import SwipeScreen from '../screens/SwipeScreen'
import { BottomTabParamList, TabOneParamList, ListParamList, SwipeParamList } from '../types';

import { Icon } from 'react-native-elements'


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const[state, setState] = useState(false)
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
        component={ListNavigator}
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

const ListStack = createStackNavigator<ListParamList>();

function ListNavigator() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{ headerTitle: 'List' }}
        // initialParams={{ setState: setState }}
      />
    </ListStack.Navigator>
  );
}

const SwipeStack = createStackNavigator<SwipeParamList>();

function SwipeNavigator() {
  return (
    <SwipeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <SwipeStack.Screen
        name="SwipeScreen"
        component={SwipeScreen}
        options={{ headerTitle: 'Swipe' }}
      />
    </SwipeStack.Navigator>
  );
}
