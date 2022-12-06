import React from 'react';
import { View, Pressable, Text, StyleSheet, Alert } from 'react-native'
import axios from 'axios';

const AxiosTut = () => {

  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function(response){
        Alert.alert(JSON.stringify(response.data))
      })
      .catch(function(error){
        console.log(error.message)
      })
      .finally(function(){
        console.log('Finally called')
      })
  }
  const getAsyncData = async() => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      Alert.alert(JSON.stringify(response.data));
    } catch (error) {
      console.log('error detected');
    }
  }
  const postData = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        Alert.alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        Alert.alert(error.message);
      });
  }
  const multiRequest = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            Alert.alert('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function (response) {
            Alert.alert('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          Alert.alert('Both requests are now complete');
        }),
      );
  }

    return (
      <View style = {styles.container}>
        <View>
          <Pressable style = {styles.button} onLongPress = {() => {getData()}}>
            <Text>GET DATA</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style = {styles.button} onLongPress = {() => {getAsyncData()}}>
            <Text>GET USING ASYNC AWAIT</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style = {styles.button} onLongPress = {() => {postData()}}>
            <Text>POST DATA</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style = {styles.button} onLongPress = {() => {multiRequest()}}>
            <Text>MULTI REQUEST</Text>
          </Pressable>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'grey',
    },
    button: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 7,
        width: '100%',
    },
});

export default AxiosTut;