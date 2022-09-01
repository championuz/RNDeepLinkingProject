/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack'
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 import HomeScreen from './screens/HomeScreen';
 import ProfileScreen from './screens/ProfileScreen';
 import FavScreen from './screens/FavScreen';
 import Settings from './screens/Settings';
 import { Image, StyleSheet, ActivityIndicator } from 'react-native';
//  import Icon from 'react-native-vector-icons/Ionicons'
 
 const Tab = createMaterialBottomTabNavigator();

 const Stack = createNativeStackNavigator();
 const HomeStack = createNativeStackNavigator();
 const FavStack = createNativeStackNavigator();
 const ProfileStack = createNativeStackNavigator();
 const SettingsStack = createNativeStackNavigator();

  const linking = {
  prefixes: [ 'demoapp://'],
  config: {
        screens: {
              HomeScreen: 'homescreen',
              FavouriteScreen: 'favscreen',
              ProfileScreen: {
                screens: {
                  Profile: {
                     path: 'profilescreen/:user/',
                },
              },
            },
              SettingsScreen: 'settingsscreen',
  },
  },
};
 
 const App = () => (
   <NavigationContainer linking={linking}>
  <Tab.Navigator
  initialRouteName="Home"
  activeColor="#fff"
  headerShown={true}
  screenOptions = {{ 
     headerStyle: {
       backgroundColor: '#009387',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
    }}
  >
  
  <Tab.Screen
    name="HomeScreen"
    component={HomeStackScreen}
    options={{
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarColor: '#009387',
      tabBarIcon: ({ color }) => (
        <Image style={styles.image} source={require('./Images/home.png')} />
      ),
    }}
  />
  <Tab.Screen
    name="FavouriteScreen"
    component={FavStackScreen}
    options={{
      tabBarLabel: 'Favourite',
      tabBarColor: '#009387',
      tabBarIcon: ({ color }) => (
        <Image style={styles.image} source={require('./Images/heartfilled32.png')} />
      ),
    }}
  />
  <Tab.Screen
    name="ProfileScreen"
    component={ProfileStackScreen}
    options={{
      tabBarLabel: 'Profile',
      tabBarColor: '#009387',
      tabBarIcon: ({ color }) => (
        <Image style={styles.image} source={require('./Images/user.png')}/>
      ),
    }}
  />
  <Tab.Screen
    name="SettingsScreen"
    component={SettingsStackScreen}
    options={{
      tabBarLabel: 'Settings',
      tabBarColor: '#009387',
      tabBarIcon: ({ color }) => (
        <Image style={styles.image} source={require('./Images/settings.png')} />
      ),
    }}
  />
</Tab.Navigator>
</NavigationContainer>
  );

 
 const HomeStackScreen = () => (
   <Stack.Navigator screenOptions = {{ 
     headerStyle: {
       backgroundColor: '#009387',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
 );

 const FavStackScreen = () => (
   <Stack.Navigator screenOptions = {{ 
     headerStyle: {
       backgroundColor: '#009387',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
    }}>
      <Stack.Screen name="Favourite" component={FavScreen} />
    </Stack.Navigator>
 );

 const ProfileStackScreen = () => (
   <Stack.Navigator screenOptions = {{ 
     headerStyle: {
       backgroundColor: '#009387',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
    }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
 );

 const SettingsStackScreen = () => (
   <Stack.Navigator screenOptions = {{ 
     headerStyle: {
       backgroundColor: '#009387',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
    }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
 );
 
 export default App;

 const styles = StyleSheet.create({
   image: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
 });
 
 
 