import { View, Text, Image } from 'react-native'
import React from 'react'
import { windowWidth } from '../utils/Dimensions'
const BannerSlider = ({ item }) => {
    return (
        <View
            style={{ width: 300, margin: 6 }}
        >
            <Image
                source={item.image}
                style={{ height: 150, width: 300, borderRadius: 10 }}

            />
        </View>
    )
}
export default BannerSlider