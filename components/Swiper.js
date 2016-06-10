import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const styles = require('../styles.js')
const constants = styles.constants;
var Swiper = require('react-native-swiper');

class swiper extends Component {
   
   // _onMomentumScrollEnd(e, state, context){
   //  console.log(state, context.state);
   // }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} height={400}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

module.exports = swiper;