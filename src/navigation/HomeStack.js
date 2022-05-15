import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import About from '../screens/About';

// const Stack = createStackNavigator();

const Stack = createNativeStackNavigator();

export default function HomeStack( props ) {
    console.log(  props );
    const { navigation } = props;

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    header: () => null,
                    haaderLeft: () => <Text onPress={ navigation.openDrawer }>MENU</Text>,
                    headerRight: () => <Text>POWER</Text>,
                }}
            />
            <Stack.Screen
                name="about"
                component={About}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    )
}
