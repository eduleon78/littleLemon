import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import SubscribeScreen from './screens/SubscribeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import RootNavigator from "./navigators/RootNavigator";
/* import { createBottomTabNavigator } from '@react-navigation/bottom-Tabs'; */


const Tab = createBottomTabNavigator();
// App.js is already setup by wrapping NavigationContainer around Root Navigator

export default function App() {
  return (
    <>
      <NavigationContainer>        
        <View style={styles.container}>
          <RootNavigator />
          <SubscribeScreen />
          <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({size}) => {
                let iconName;
                if (route.name === 'WelcomeScreen') {
                  iconName = 'ios-home';
                } else if (route.name === 'SubscribeScreen') {
                  iconName = 'ios-enter';
                }
                return <Ionicons name={iconName} size={size} />;
              },
            })}
            initialRouteName="WelcomeScreen">
            {/* <Tab-Screen name="Welcome" component={WelcomeScreen} /> */}
            <Tab-Screen name="Subscribe" component={SubscribeScreen} />
          </Tab.Navigator>
        </View>        
      </NavigationContainer>
      
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footContainer: { backgroundColor: '#333333'},
});
