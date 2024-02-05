import * as React from 'react';
import {  
  View,
  Text, 
  StyleSheet,
  Image, 
  Pressable 
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image 
        style={styles.logo} 
        source={require("../assets/little-lemon-logo.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'} 
      />
      <Text style={styles.textStyle}>
          Litle Lemon, Your Local Mediterranean Bistro
      </Text>
      <Pressable 
        onPress={() => navigation.navigate('Subscribe')}
        style={styles.button}>
        <Text style={styles.buttonStyle}>Newsletter</Text>
      </Pressable>
    </View>   
  ); 
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  logo: {
    marginTop: 150,
    marginLeft: 100,
    height: 200,
    width: 200,
    resizeMode: "contain"
  },
  textStyle : {
    marginTop: 90,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 150,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: 'center'
  },
  buttonStyle : {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#006600",
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  }
});


