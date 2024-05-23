import { View, Text, ScrollView, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { freeGames, paidGames, sliderData } from '../model/data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import Carousel from 'react-native-snap-carousel'
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeSrceen = ({ navigation }) => {

    useEffect(() => {
        console.log(windowWidth)
    }, [])
    const [gamesTab, setGamesTab] = useState(1);

    const renderBanner = ({ item }) => {
        return <BannerSlider item={item} />;
    }
    const onSelectSwitch = val => {
        setGamesTab(val)
    }
    return (

        <SafeAreaView
            style={{ flex: 1, backgroundColor: "#fff" }}
        >
            <ScrollView
                style={{ padding: 20 }}
            >
                <View

                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                    }}
                >
                    <Text
                        style={{ fontSize: 18, fontFamily: 'Roboto-medium' }}
                    >Hello my future</Text>

                    <TouchableOpacity

                    >

                        <ImageBackground
                            source={require('../assets/images/user-profile.jpg')}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#C6C6C6',
                        borderWidth: 1,
                        borderRadius: 10
                        ,
                        paddingHorizontal: 4,
                        paddingVertical: 2,

                        alignItems: 'center'
                    }}
                >
                    <Icon
                        name="search"
                        size={20}
                        color="#C6C6C6"
                        style={{ marginRight: 5 }}
                    />



                    <TextInput
                        placeholder='Search'

                    />

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                        , marginVertical: 15,

                    }}
                >
                    <Text
                        style={{ color: 'black', fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto-Medium' }}
                    >
                        Upcoming Games
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={{ color: "#0aada8" }}
                        >See all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: 15,
                        paddingTop: 10,
                    }}

                />
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: 15,
                        paddingTop: 10,



                    }}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}

                >


                    {sliderData.length > 0 ? sliderData.map((val) => (
                        <BannerSlider
                            item={val}
                        />

                    )) : null}

                </ScrollView>
                <Carousel
                    ref={c => {
                        this._carousel = c;
                    }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}

                />

                <View

                    style={{ marginBottom: 20 }}


                >
                    <CustomSwitch
                        selectionMode={1}
                        option1={"Free to play"}
                        option2={"paid for games"}
                        onSelectSwitch={onSelectSwitch}
                    />

                </View>
                {
                    gamesTab == 1 && freeGames.map((item) => (
                        <ListItem
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            price={item.price}
                            onPress={() =>
                                navigation.navigate("gameDetailScreen",
                                    { name: "the detail of game" })
                            }
                        />
                    ))

                }
                {
                    gamesTab == 2 && paidGames.map((item) => (
                        <ListItem
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            price={item.price}
                            onPress={() =>
                                navigation.navigate("gameDetailScreen",
                                    { name: "the detail of game" })
                            }
                        />
                    ))
                }

            </ScrollView>

        </SafeAreaView >


    )
}
export default HomeSrceen