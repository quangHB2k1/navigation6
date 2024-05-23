import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { freeGames } from '../model/data'
import { windowWidth } from '../utils/Dimensions'
export default function ListItem({
    photo, title, subTitle,
    isFree, price, onPress
}) {
    return (
        <View
            style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
                alignItems: 'center'

            }}
        >
            <View
                style={{
                    flexDirection: 'row',

                    alignItems: 'center'
                }}
            >
                <Image
                    source={photo}
                    style={{ width: 55, height: 55, margin: 6, borderRadius: 8 }}
                />
                <View
                    style={{ width: windowWidth - 220 }}
                >

                    <Text
                        style={{
                            color: "#333",
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                        }}
                    >
                        {subTitle}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontFamily: "Roboto-Medium",
                            fontSize: 14,
                            textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    justifyContent: 'center',
                    backgroundColor: "#0aada8",
                    borderRadius: 10,
                    padding: 10,
                    width: 100,
                    height: 40,
                }}
            >

                <Text
                    style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontFamily: 'Roboto-Medium',
                        fontSize: 14,
                    }}
                >
                    {isFree === "Yes" ? "Play" : price}
                </Text>


            </TouchableOpacity>
        </View >
    )
}