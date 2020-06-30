import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function PageSchedule() {
  return (
    <View style={styles.container}>
      <Text> PageSchedule </Text>
    </View>
  );
}

export default PageSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
