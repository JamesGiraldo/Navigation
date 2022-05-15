import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Contact(props) {
    const { navigation } = props;

    return (
        <View>
            <Text>Hello Contact</Text>
            <Button
                title="Ir a  Home"
                onPress={() => navigation.navigate('home')}
            />
            <Button
                title="Ir a About"
                onPress={() => navigation.navigate('about')}
            />
        </View>
    )
}
