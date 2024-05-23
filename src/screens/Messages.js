import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Messages({ navigation }) {
    return (
        <View>
            <Text>Messages</Text>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>pressHere</Text>
            </TouchableOpacity>
        </View>
    )
}