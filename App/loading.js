import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/Ktebi.png')} style={styles.logo1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
