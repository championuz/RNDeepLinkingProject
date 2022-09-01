import React from 'react'
import {View, Text, Button, StyleSheet, Linking} from 'react-native'

const FavScreen = () => {

    const url_settings = 'demoapp://profilescreen/Smith';
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Favourite Screen</Text>
            <Button
            title="Click Here"
            onPress={() => Linking.openURL(url_settings)}
            />
        </View>
    );
};

export default FavScreen;

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