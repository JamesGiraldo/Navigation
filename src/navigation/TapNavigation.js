import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ContactStack from './ContactStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStack} options={{ title: 'Home' }} />
            <Tab.Screen name="contact" component={ContactStack} options={{ title: 'Contacto' }}/>
        </Tab.Navigator>
    );
}
