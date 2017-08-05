import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      //justifyContent: 'space-around',
      // justifyContent: 'center',
      // alignItems: 'flex-start',
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactNativeTutorial', () => JustifyContentBasics);
