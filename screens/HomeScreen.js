import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to React Native {'\n'} Deep Linking Tutorial</Text>
              
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
    fontSize: 24,
    color: '#800000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textDescription: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});