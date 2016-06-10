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

var Sound = require('react-native-sound');

var chant = new Sound('namochant.aif', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + chant.getDuration() +
        'number of channels: ' + chant.getNumberOfChannels());
  }
});

class PlayButton extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		pressStatus: false,
    	}
    	this.onChange = this.onChange.bind(this) //WHAT IS AUTOBINDING? UNDERSTAND THIS!
    }

  	onChange(){
  		if(this.state.pressStatus == false){
  			this.setState({pressStatus: true});
        chant.play(); 
        chant.setNumberOfLoops(-1);
  		} else{
        this.setState({pressStatus: false});
        chant.stop();
      }
  	}

	render() {
		return (			
			<View style={styles.playButtonContainer}>     
        <TouchableOpacity onPress = {this.onChange} activeOpacity={0.5}>
  				<View style={!this.state.pressStatus ? styles.playButtonPlay : styles.stopButton}></View>
        </TouchableOpacity>  

      </View>
		);
	}
}

module.exports = PlayButton;