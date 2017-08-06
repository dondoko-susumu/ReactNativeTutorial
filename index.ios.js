'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TouchableHighlight,
  StatusBar,
} from 'react-native';


var SampleApp = React.createClass({
  getInitialState: function() {
    return {
      showTabBar: true
    };
  },

  _toggleTabBar: function() {
  	if ( this.state.showTabBar === true ) {
      this.setState( {showTabBar: false} );
    }
    else {
      this.setState( {showTabBar: true} );
    }
  },

  _renderTabBar: function() {
  },

  render: function() {

    if (this.state.showTabBar) {
      return (<TabBarExample toggleTabBar={this._toggleTabBar} />);
    }
    else {
      return (
        <MyViewFullScreen toggleTabBar={this._toggleTabBar} />
      );
    }

	}
});


var TabBarExample = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
      selectedTab: 'blueTab',
      notifCount: 0,
      presses: 0,
    };
  },

  _renderContent: function(color: string, pageText: string, num?: number) {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      // justifyContent: 'space-around',
      // justifyContent: 'center',
      // alignItems: 'flex-start',
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        >
          <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        >
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue"
	      translucent={true}>

        <TabBarIOS.Item
          title="Blue Tab"
          systemIcon="search"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          <MyViewOne toggleTabBar={this.props.toggleTabBar} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Red Tab"
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="contacts"
          title="More Green"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
});


var MyViewOne = React.createClass({
  render: function() {

    StatusBar.setHidden(false, 'slide')

    return (
      <View style={[styles.tabContent, {backgroundColor: 'orange'}]}>
        <Text style={styles.tabText}>I like Iron Maiden, 666</Text>
      	<MyScreenToggleButton toggleTabBar={this.props.toggleTabBar} />
      </View>
    );
  }
});


var MyViewFullScreen = React.createClass({
  render: function() {

    StatusBar.setHidden(true, 'fade')

    return (
      <View style={[styles.tabContent, {backgroundColor: 'grey'}]}>
        <Text style={styles.tabText}>This should be full screen i.e. No TabBar.</Text>
      	<MyScreenToggleButton toggleTabBar={this.props.toggleTabBar} />
      </View>
    );
  }
});


var MyScreenToggleButton = React.createClass({
  _onPressButton: function() {
  	this.props.toggleTabBar();
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <Text style={styles.button}>
  				Push Me
  			</Text>
      </TouchableHighlight>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  button: {
    backgroundColor: 'green',
    margin: 10,
  }
<<<<<<< HEAD
});
=======
}
>>>>>>> tmp

AppRegistry.registerComponent('ReactNativeTutorial', () => SampleApp);
