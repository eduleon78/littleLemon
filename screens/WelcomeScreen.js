import * as React from 'react';
import { 
  ScrollView, 
  View,
  Text, 
  StyleSheet,
  Image, 
  Pressable 
} from 'react-native';

export const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image 
          style={styles.image} 
          source={('../assets/litle-lemon-logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'} 
        />
        <Text style={styles.headerText}>
            Litle Lemon, Your Local Mediterranean Bistro
        </Text>
        <Pressable 
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={styles.button}>
          <text style={styles.buttonText}>View Menu</text>
        </Pressable>
      </View>
    </ScrollView>    
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});


