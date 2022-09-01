import React from 'react'
import {View, Text, Button, StyleSheet, Linking} from 'react-native'

const Settings = () => {
        const url_fav = 'demoapp://favscreen';
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
            <Button
            title="Click Here"
            onPress={() => Linking.openURL(url_fav)}
            />
        </View>
    );
};

export default Settings;

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
});