import React from 'react';
import { Text, View, Button } from 'react-native';

export default function About(pros) {
    const { navigation } = pros;

    return (
        <View>
            <Text>Hello About</Text>
            <Button title="Ir a Home" onPress={() => navigation.navigate('home')} />
            <Button title="Ir a Contacto" onPress={() => navigation.navigate('contact')} />
        </View>
    )
}
