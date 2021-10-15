import React from "react";
import { View, Text } from 'react-native';

const HEIGHT = 100;
export default function Header(){
    return(
        <View style={{flexDirection:'row'}}>         
            <View style={{justifyContent:'center'}}>
                <Text style={{color:"#000"}}>
                    Menu
                </Text>
            </View>
                <View style={{
                        borderColor:'#000',
                        borderWidth:1,
                        height:HEIGHT/3,
                        marginRight:5,
                        marginLeft:5,
                        borderRadius:20,
                        alignItems:'center',
                        flex:1,
                }}>
                <View style={{flex:1,alignSelf:'flex-end',justifyContent:'space-around',marginRight:10}}>
                    <Text style={{color:"#000"}}>search button</Text>
                </View>               
            </View>
        </View>
    );
};