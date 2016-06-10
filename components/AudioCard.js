'use strict';

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
const PlayButton = require('./PlayButton.js');
const AudioCardHead = require('./AudioCardHead.js');
const AudioCardSummary = require('./AudioCardSummary.js');

var Swiper = require('react-native-swiper');

class AudioCard extends Component {
  render() {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>

      <View style={styles.slide1}>
        <AudioCardHead/>
        <PlayButton/>
        <AudioCardSummary/>
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


module.exports = AudioCard;
