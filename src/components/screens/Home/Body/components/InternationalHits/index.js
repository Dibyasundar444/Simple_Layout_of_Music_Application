import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { styles } from "../styles";


export default function International(){
    return(
        <View>
            <Text style={{color:"#000",textAlign:'center'}}>
                        International Top Hits
            </Text>
            <View style={{alignItems:'center',marginTop:10}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.commonView}></View>
                    <View style={styles.commonView}></View>
                    <View style={styles.commonView}></View>
                    <View style={styles.commonView}></View>
                    <View style={styles.commonView}></View>
                    <View style={styles.commonView}></View>
                    <View style={styles.commonView}></View>
                </ScrollView>
            </View>
        </View>
    );
};