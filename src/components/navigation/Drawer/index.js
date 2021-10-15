import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyBottomTab from "../BottomTabs/index";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
    return(
        <DrawerNav.Navigator>
            <DrawerNav.Screen name="Home" component={MyBottomTab} />
        </DrawerNav.Navigator>
    );
};