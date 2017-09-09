import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';

const Placeholder = () =>
  <View style={styles.container}>
    <Image style={{height: 100, width: 100, marginBottom: 20}} source={require('./beer.png')} />
    <Text>You are free to do whatever you want.</Text>
  </View>;

export default Placeholder;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'flex-start',
  },
});
