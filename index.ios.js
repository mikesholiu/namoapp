/**
 * Namo App
 * Github Link Goes Here
 * @mikesholiu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('./styles.js')
const AudioCard = require('./components/AudioCard.js');
const Swiper = require('./components/Swiper.js');

class namoapp extends Component {
  render() {
    return (
      <View>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>Namo咒</Text>
        </View>
        
        <View style={styles.summaryBar}>
          <Text style={styles.summaryBarTitle}>Chants</Text>
          <Text style={styles.summaryBarText}>
          A Buddhist chant is a form of musical verse or incantation.{"\n"}
          They exist in just about every part of the Buddhist world.{"\n"}
          Almost every Buddhist school has some tradition of chanting.
          </Text>
        </View>
        
        <AudioCard/>
        
      </View>
    );
  }
}

AppRegistry.registerComponent('namoapp', () => namoapp);
