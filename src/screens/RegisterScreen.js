import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Register from "../assets/images/misc/registration.svg"
export default function RegisterScreen() {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: "center" }}
        >
            <View
                style={{ paddingHorizontal: 25 }}
            >
                <View
                    style={{ alignItems: "center" }}
                >

                    <Register
                        width={300}
                        height={300}
                        style={{}}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        fontFamily: "Roboto-mediumItalic", color: "#20315f"
                    }}
                >
                    REGISTER
                </Text>
            </View>
        </SafeAreaView>
    )
}