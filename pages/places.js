import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function PagePlaces() {
  return (
    <View style={styles.container}>
      <Text> PagePlaces </Text>
    </View>
  );
}

export default PagePlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
