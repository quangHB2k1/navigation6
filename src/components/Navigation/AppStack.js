import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator';
import Feed from '../../screens/Feed';
const Drawer = createDrawerNavigator();
export default function AppStack() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'

        >
            <Drawer.Screen
                name="Home"
                component={TabNavigator}

            />
            <Drawer.Screen
                name="feed"
                component={Feed}
            />
        </Drawer.Navigator>
    )
}