import React from "react";
import { View, Text } from 'react-native';

const HEIGHT = 100;

export default function Banner(){
    return(
        <View>
            <Text style={{color:"#000",textAlign:'center'}}>
                        Banner
            </Text>
            <View style={{
                        borderColor:'#000',
                        borderWidth:1,
                        height:HEIGHT,
                        marginRight:5,
                        marginLeft:5,
                        marginTop:10,
                        }}>               
            </View>
        </View>
    );
};