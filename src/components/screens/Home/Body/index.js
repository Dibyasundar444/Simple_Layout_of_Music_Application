import React from "react";
import { View, Text, ScrollView } from 'react-native';
import Artists from "./components/Artists";
import Banner from "./components/Banner";
import Devotional from "./components/Devotional";
import International from "./components/InternationalHits";
import Moodly from "./components/Moodly";
import Trending from "./components/Trending";


export default function Body(){
    return(
        <View>
            <View style={{marginTop:10}}>
                <Banner />
                </View>
            <View style={{marginTop:10}}>
                <Trending />
            </View>
            <View style={{marginTop:10}}>
                <Moodly />
            </View>
            <View style={{marginTop:10}}>
                <Devotional />
            </View>
            <View style={{marginTop:10}}>
                <International />
            </View>
            <View style={{marginTop:10}}>
                <Artists />
            </View>
        </View>
    );
};