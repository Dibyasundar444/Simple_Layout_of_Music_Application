import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';



export default function Register ({ navigation }) {


    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email:'',
        password: '',
        confirmPassword:''
    });


    const textInputChange = async(key,val) => {
        if( val.length !== 0 ) {
            setValues({
                ...values,
                error: false,
                [key]:val,
                check_textInputChange: true
            });
        } else {
            setValues({
                ...values,
                error: false,
                [key]:val,
                check_textInputChange: false
            });
        }
    };
    const clickSubmit = () => {
        setValues({ ...values});
        console.log(values);
    };
    return(
        <SafeAreaView style={styles.mainContainer}>
            <View style={{paddingTop:50}}>
                <Text style={{textAlign:'center',color:'#000'}}>
                    Register page
                </Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',flex:1,marginBottom:20}}>
                <TextInput placeholder = "First Name"
                            onChangeText = {(val) => textInputChange('firstName',val)}   
                            style={styles.textInputName}   
                            placeholderTextColor="gray"      
                />
                <TextInput placeholder = "Last Name"
                            onChangeText = {(val) => textInputChange('lastName',val)}  
                            style={styles.textInputName}  
                            placeholderTextColor="gray"        
                />
                <TextInput placeholder = "Email"
                            onChangeText = {(val) => textInputChange('email',val)}  
                            style={styles.textInputName}    
                            placeholderTextColor="gray"      
                />
                <TextInput placeholder = "Password"
                            onChangeText = {(val) => textInputChange('password',val)} 
                            style={styles.textInputName} 
                            placeholderTextColor="gray"          
                />
                <TextInput placeholder = "Confirm Password"
                            onChangeText = {(val) => textInputChange('confirmPassword',val)}   
                            style={styles.textInputName}   
                            placeholderTextColor="gray"      
                />
            </View>
            <View style = {{marginBottom:20}}>
                    <TouchableOpacity 
                                style={styles.button}
                                onPress={clickSubmit}
                    >
                            <Text style={{fontSize: 18, fontWeight: '700'}}>Register</Text>
                    </TouchableOpacity> 
            </View> 
            <View style = {{flexDirection:'row',paddingBottom:20,paddingRight:40,justifyContent:'flex-end'}}>
                    <Text style = {{}}>Already registered?</Text>
                    <Text 
                        style = {{paddingLeft:10,color:"#008b8b"}} 
                        onPress = {()=>navigation.navigate('LogIn')}
                    >
                        Click here to logIn
                    </Text>
            </View>   
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    textInputName: {
        borderBottomWidth: 1,  
        height: 40,
        margin: 5,
        padding: 10,
        fontSize: 15,
        fontWeight: '500',
        width:200,
        color:'#000'
    },
    
    button: {
        alignItems: "center",
        backgroundColor: "#008b8b",
        borderRadius:20,
        padding: 10,
        marginLeft:40,
        marginRight:40
      },
});