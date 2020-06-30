import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function PageTrips() {
  return (
    <View style={styles.container}>
      <Text> PageTrips </Text>
    </View>
  );
}

export default PageTrips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
