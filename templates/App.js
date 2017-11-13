/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import testModule from 'rnswifttemplate';

export default class App extends Component<{}> {
  constructor() {
    super(); 
    this.state = {
      'instructions': "Template Instructions",
      'counter': 0
    };
  }
  componentWillMount() {
    var me = this; 
    testModule.addListener((arr)=>{
      this.setState(previousState => { 
        const newcounter = previousState.counter + 1;
        const newmessage = "Again a number: " + newcounter.toString()
        setTimeout(()=> {testModule.emitMessage(newmessage, 0);}, 500); 
        return {
          'instructions': "Received message: " + arr.message,
          'counter': newcounter
        }
      });
    })
    testModule.emitMessage("Starting");

    testModule.demoWithPromise("Hello there").then(
      (reply)=>{
        console.log("Got a promise back", reply);
        this.setState({"promiseMessage": reply})
      },
      ()=>{
        //Error
        console.log("Got an error back")
        this.setState({"promiseMessage": "failed promise!"});

    })
  }
  render() {
    const constMessage = "My constant startTime is " + testModule.startTime;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Swift!
        </Text>
        <Text>
          {constMessage}
         
        </Text>
        <Text style={styles.instructions}>
          Edit App.js and your plugin index.js for live edits. 
        </Text>
        <Text style={styles.welcome}>
          {this.state.instructions}
        </Text>
        <Text style={styles.welcome}> 
          Promise: {this.state.promiseMessage}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
