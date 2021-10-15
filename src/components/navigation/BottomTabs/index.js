import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, PremiumStack, SettingsStack } from '../Stack/index';

const Tab = createBottomTabNavigator();

export default function MyBottomTab () {
    return(
            <Tab.Navigator screenOptions={{ headerShown: false }}>               
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Premium" component={PremiumStack} />
                <Tab.Screen name="Settings" component={SettingsStack} />
            </Tab.Navigator>        
    );
};