import React from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';


export default function Artists(){
    return(
        <View>
            <Text style={{color:"#000",textAlign:'center'}}>
                        Artists
            </Text>
            <View style={{alignItems:'center',marginTop:10}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    	<View style={styles.artistView}></View>
                    	<View style={styles.artistView}></View>
			<View style={styles.artistView}></View>
			<View style={styles.artistView}></View>
			<View style={styles.artistView}></View>
			<View style={styles.artistView}></View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
	artistView:{
		borderColor:'#000',
		borderWidth:1,
		height:90,
		width:90,
		marginHorizontal:5,
		borderRadius:63
	}
});