import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Twitter from "../assets/images/misc/twitter.svg";
import Gaming from "../assets/images/misc/gaming.svg"
import Svg, { Image } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
const OnboardingScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "fff",
                alignItems: "center"
            }}
        >

            <View
                style={{ marginTop: 20 }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: "Roboto-mediumItalic"
                        , fontWeight: "bold",
                        color: "#20315f"
                    }}
                >GAMEON</Text>
            </View>
            <View
                style={{ flex: 1, justifyContent: "center" }}
            >
                <Gaming
                    width={300}
                    height={300}
                    style={{ transform: [{ rotate: '-15deg' }] }}
                />
            </View>


            <TouchableOpacity
                style={{
                    marginBottom: 50, backgroundColor: "red", flexDirection: "row", width: "90%", padding: 20,
                    justifyContent: "space-between", alignItems: "center",
                    borderRadius: 20, backgroundColor: '#AD40AF'

                }}
                onPress={() => navigation.navigate("Login")}
            >

                <Text
                    style={{
                        color: "white",
                        fontSize: 18,
                        textAlign: "center",
                        fontWeight: "bold",
                        fontFamily: "Roboto-mediumItalic"
                    }}
                >Let's Begin</Text>
                <Icon name="arrow-forward-ios" size={22} color="#fff" />
            </TouchableOpacity>

        </SafeAreaView>

    )
}
export default OnboardingScreen