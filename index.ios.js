import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class ReactNativeTutorial extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTutorial', () => ReactNativeTutorial);
