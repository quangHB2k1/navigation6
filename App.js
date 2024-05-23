
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeSrceen from './src/screens/HomeSrceen';
// import LoginScreen from './src/screens/LoginScreen';
// import gameDetailScreen from './src/screens/gameDetailScreen';
// import Feed from './src/screens/Feed';
// import Messages from './src/screens/Messages';
// import Main from './src/screens/Main';
// import { FlatList, Text, Touchable, TouchableOpacity } from 'react-native';
// //import { createDrawerNavigator } from '@react-navigation/drawer';

// const myHome = () => {
//   const Tab = createNativeStackNavigator()
//   return (
//     <Tab.Navigator
//       initialRouteName='Main'
//     >
//       <Tab.Screen
//         name="Main"
//         component={Main}
//         options={({ navigation, route }) => ({

//           headerRight: () => (<TouchableOpacity
//             onPress={() => navigation.navigate("Home")}
//           ><Text>
//               pressHere1</Text></TouchableOpacity>)
//         })
//         }
//       />
//       <Tab.Screen
//         name="Feed"
//         component={Feed}
//         options={{
//           title: "feed",
//         }}
//       />
//       <Tab.Screen
//         name="Mess"
//         component={Messages}
//         options={{}}
//       />
//     </Tab.Navigator>

//   )
// }
// const App = () => {
//   const Stack = createNativeStackNavigator();
//   // const Drawer = createDrawerNavigator()

//   return (
//     <NavigationContainer>
//       {/* <Drawer.Screen
//         component={HomeSrceen}
//         name="Home"
//       /> */}
//       <Stack.Navigator initialRouteName='initial'>
//         <Stack.Screen name="initial" component={myHome}
//           options={{
//             headerShown: false
//           }}
//         />
//         <Stack.Screen name="Home" component={HomeSrceen}
//           options={{}}
//         />
//         <Stack.Screen name="gameDetailScreen" component={gameDetailScreen}

//           options={({ route }) => ({ title: route.params.name })} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;

//________________________________________________________________________________

import React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/components/Navigation/AuthStack';
import AppStack from './src/components/Navigation/AppStack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator> */}
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>

  );
}

export default App