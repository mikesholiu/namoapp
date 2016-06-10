'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('../styles.js')
const constants = styles.constants;

class AudioCardSummary extends Component {
	render() {
		return (	
			<Text style={styles.audioCardSummary}>Traditional chant of Amitabha Buddha's name</Text>
		);
	}
}

module.exports = AudioCardSummary;