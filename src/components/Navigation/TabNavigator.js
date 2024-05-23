import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeSrceen from '../../screens/HomeSrceen'
import gameDetailScreen from '../../screens/gameDetailScreen'
import Feed from '../../screens/Feed'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
import FavoriteSCreen from '../../screens/FavoriteSCreen'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();
const route = ""

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeSrceen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GameDetails"
                component={gameDetailScreen}
                options={({ route }) => ({
                    title: route.params?.title
                })}
            />
        </Stack.Navigator>
    )
}
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#AD40AF',

                },
                tabBarInactiveBackgroundColor: "fff",
                tabBarActiveTintColor: 'yellow',
            }}


        >

            <Tab.Screen
                name="Home2"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                        backgroundColor: '#AD40AF'
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="home" color={color} size={size} />
                    )
                })}

            />
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarBadge: 3,
                    tabBarStyle: {
                        backgroundColor: "red"
                        , display: 'flex'
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="shopping-cart" color={color} size={size} />
                    )
                }}

            />
            <Tab.Screen
                name="favorite"
                component={FavoriteSCreen}
                options={{
                    tabBarIcon: ({
                        color, size
                    }) => (
                        <Icon
                            name="favorite-border" color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
const getTabBarVisibility = route => {
    console.log(route)
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    console.log(routeName)
    // ?? 'Feed': Đây là toán tử nullish coalescing (??). Nếu kết quả của getFocusedRouteNameFromRoute(route) là null hoặc undefined, t
    return routeName === "GameDetails" ? 'none' : "flex"
}
export default TabNavigator