import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from "firebase";
import db from "../config";

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        
        this.state = {
            emailID: "",
            password: "",
        }
    }

    userSignUp = async(email, pass) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((response) => {
            return Alert.alert("User Created Succesfully!");
        })
        .catch(function (error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage+" Code: " + errorCode);
        })
    }

    userLogin = async(email, pass) => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((response) => {
            return Alert.alert("Logged In Succesfully!");
        })
        .catch(function (error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage+" Code: " + errorCode);
        })
    }
    
    render(){
        return(
          <View style={styles.container}>
              <View>
                <Text style={styles.header}>
                    Book Santa
                </Text>
              </View>
              <View>
                  <TextInput style={styles.input} placeholder="emailabc@example.com" keyboardType="email-address"
                  onChangeText={(text)=>{
                    this.setState({emailID: text});
                  }}></TextInput>
              </View>
              <View>
                  <TextInput style={styles.input} placeholder="password" secureTextEntry={true}
                  onChangeText={(text)=>{
                    this.setState({password: text});
                  }}></TextInput>
              </View>
              <View>
                  <TouchableOpacity style={styles.button} onPress={() => {
                      this.userLogin(this.state.emailID, this.state.password);}}>
                       <Text style={styles.bt}>Login</Text>
                  </TouchableOpacity>
              </View>
              <View>
                  <TouchableOpacity style={styles.button} onPress={() => {
                      this.userSignUp(this.state.emailID, this.state.password);}}>
                       <Text style={styles.bt}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
        paddingLeft: 40,
    },
    input: {
        width: 120,
        height: 60,
        borderWidth: 5,
        borderColor: "green",
        fontSize: 11,
        margin: 20,
    },
    button: {
        width: 100,
        height: 49,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 7,
        borderRadius: 30,
        backgroundColor: "blue",
        shadowColor: "#000099",
    },
    bt: {
        color: "white",
        fontSize: 14,
    }
  });