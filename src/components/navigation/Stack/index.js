import * as React from "react";
// import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Register from '../../screens/RegisterPage';
// import LogIn from '../../screens/logInPage';
import Home from "../../screens/Home";
import Premium from "../../screens/Premium";
import Settings from "../../screens/Settings";

const Stack = createStackNavigator();


function HomeStack () {
    return(
            <Stack.Navigator screenOptions={{ headerShown: false }}>               
                <Stack.Screen name="A" component={Home} />
            </Stack.Navigator>
        
    )
}
function PremiumStack () {
    return(
            <Stack.Navigator screenOptions={{ headerShown: false }}>               
                <Stack.Screen name="B" component={Premium} />
            </Stack.Navigator>
        
    )
}
function SettingsStack () {
    return(
            <Stack.Navigator screenOptions={{ headerShown: false }}>               
                <Stack.Screen name="C" component={Settings} />
            </Stack.Navigator>
        
    )
}


export { HomeStack, PremiumStack, SettingsStack };