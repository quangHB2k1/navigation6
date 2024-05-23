import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginSVG from '../assets/images/misc/login.svg';
import InputField from '../components/inputField';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import Facebook from "../assets/images/misc/facebook.svg"
import Google from "../assets/images/misc/google.svg"
import Twitter from "../assets/images/misc/twitter.svg"
const LoginScreen = ({ navigation }) => {
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
                    <LoginSVG
                        width={300}
                        height={300}
                        style={{ transform: [{ rotate: "-5deg" }] }}
                    ></LoginSVG>
                </View>
                <Text

                    style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        fontFamily: "Roboto-mediumItalic", color: "#20315f"
                    }}
                >Login</Text>


                <InputField
                    icon={
                        <Icon
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}

                        />

                    }
                    label={"Email ID"}
                />
                <InputField
                    icon={<Icon
                        name="lock"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5 }}
                    />}
                    label={"Password"}
                    fieldButtonLabel={"Forgot?"}
                />
                <CustomButton
                    label={"Login"}
                />
                <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                    Or, login with ...
                </Text>
                <View
                    style={{
                        flexDirection: "row", justifyContent: "space-between",
                        marginBottom: 30
                    }}
                >

                    <TouchableOpacity
                        style={{

                            paddingHorizontal: 30,
                            paddingVertical: 10,
                            borderWidth: 2,
                            borderColor: '#ddd',
                            borderRadius: 10
                        }}
                    >
                        <Facebook
                            height={24} width={24}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{

                            paddingHorizontal: 30,
                            paddingVertical: 10,
                            borderWidth: 2,
                            borderColor: '#ddd',
                            borderRadius: 10
                        }}
                    >
                        <Google
                            height={24} width={24}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{

                            paddingHorizontal: 30,
                            paddingVertical: 10,
                            borderWidth: 2,
                            borderColor: '#ddd',
                            borderRadius: 10
                        }}

                    >
                        <Twitter
                            height={24} width={24}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}
                >

                    <Text
                        style={{ color: '#666', marginRight: 5 }}
                    >new to the App?</Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Register")}
                    >
                        <Text
                            style={{ color: '#AD40AF', fontWeight: '700' }}
                        >Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}
export default LoginScreen