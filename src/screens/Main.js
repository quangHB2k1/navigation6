import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Main({ navigation }) {
    return (
        <View>
            <Text>Main</Text>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Feed")}
            >
                <Text>press here</Text>

            </TouchableOpacity>
        </View>
    )
}