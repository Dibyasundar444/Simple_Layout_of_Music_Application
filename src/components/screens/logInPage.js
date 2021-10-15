import React,{ useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';


export default function LogIn () {                 
    const [values, setValues] = useState({
        email: "",
        password: "",
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
    
    const clickPass = async() => {
        alert('please check your email');
        setValues({...values});
    }
    const clickSubmit = async() => {
        setValues({ ...values });
        console.log(values);
    }
    return( 
        // <ScrollView>
            <View style={styles.container}>
                <View style={{borderWidth:1,borderRadius:63,alignSelf:'center',marginBottom:80}}>
                    <Image style={styles.image} source={require("../../assets/images/logo1.jpg")} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(value) => textInputChange('email',value)}
                    />
                </View>          
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(value) => textInputChange('password',value)}
                    />
                </View>       
                <TouchableOpacity onPress={()=>{clickPass()}}>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>         
                <TouchableOpacity style={styles.loginBtn} onPress={()=>{clickSubmit()}}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        // {/* </ScrollView> */}
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
     
      image: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderColor: '#fff',
        alignSelf:'center',
        position:'relative'
      },
     
      inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
     
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },

  });
  