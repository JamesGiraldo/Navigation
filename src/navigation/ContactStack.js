import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Contact from '../screens/Contact';
import Courses from '../screens/Courses';

const Stack = createNativeStackNavigator();

export default function ContactStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="contact"
                component={Contact}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="courses"
                component={Courses}
                options={{ header: () => null }}
                // options={{ title: 'Cursos' }}
            />
        </Stack.Navigator>
    )
}
