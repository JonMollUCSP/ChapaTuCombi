import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function PageBuses() {
  return (
    <View style={styles.container}>
      <Text> PageBuses </Text>
    </View>
  );
}

export default PageBuses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
