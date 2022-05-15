import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Courses(props) {
    const { navigation } = props;

    return (
        <View>
            <Text>Hello Cousers</Text>
            <Button title="ir a About" onPress={() => navigation.navigate('about')} />
            <Button title="ir a Contacto" onPress={() => navigation.navigate('contact')} />
        </View>
    )
}
