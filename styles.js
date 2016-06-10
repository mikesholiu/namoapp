import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const constants = {
  
};

var styles = StyleSheet.create({
  summaryBar:{
    backgroundColor: '#FDE3A7',
    padding: 20,
  },
  summaryBarTitle:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize: 25,
    color: '#929292',
    textAlign: 'center',
    marginBottom: 10,
  },
  summaryBarText:{
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 12,
    color: '#929292',
    lineHeight: 20,
    textAlign: 'center',
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
  topBar: {
    backgroundColor: '#F5A623',
    paddingTop:30,
    paddingBottom:10,
    flexDirection: 'row',
  },
  topBarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    /* Namo: */
    fontFamily: 'HelveticaNeue-Bold',
    flex: 1,
  },
  playButtonCircle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'rgba(155,154,155,0.11)',
  },
  playButtonPlay: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#F5A623',
    transform: [
      {rotate: '90deg'}
    ],

  },
  // playButtonPauseLeft: {
  //   backgroundColor: '#F5A623',
  //   height: 60,
  //   width: 20,

  // },
  // playButtonPauseRight: {
  //   backgroundColor: '#F5A623',
  //   height: 60,
  //   width: 20,

  // },
  stopButton:{ 
    height: 60,
    width: 60, 
    backgroundColor: '#F5A623'
  },
  playButtonContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  audioCardTitle:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize: 25,
    color: '#929292',
    textAlign: 'center',
    paddingTop: 50,
  },
  audioCardSummary:{
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 12,
    color: '#929292',
    lineHeight: 20,
    textAlign: 'center',
  },
  empty:{

  },
  wrapper: {
  },
  slide1: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide2: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  slide3: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

module.exports = styles
module.exports.constants = constants;