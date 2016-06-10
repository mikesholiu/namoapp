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

class AudioCardHead extends Component {
	render() {
		return (	
			<Text style={styles.audioCardTitle}>Amitofo</Text>
		);
	}
}

module.exports = AudioCardHead;