import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MyBottomTab from "./components/navigation/BottomTabs";



export default function App(){
    return(
        <NavigationContainer>
            <MyBottomTab />
        </NavigationContainer>        
    );
};