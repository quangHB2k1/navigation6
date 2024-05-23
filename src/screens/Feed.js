import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Feed({ navigation }) {
    return (
        <View>
            <Text>Feed</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Mess")}
            >
                <Text>pressHere</Text>
            </TouchableOpacity>
        </View>
    )
}