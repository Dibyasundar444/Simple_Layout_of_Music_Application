import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from './Header/index';
import Body from './Body/index';

const HEIGHT = 100;


export default function Home(){
    return(
        <View style={{flex:1}}>
            <View style={{marginTop:5}}>
                <Header />
            </View>
            <View style={{flex:1,marginBottom:10}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Body />
                </ScrollView>
            </View>
        </View>
    );
};