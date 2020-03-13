import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text> History {params.name}  </Text>
      </View>
    );
  }
}
