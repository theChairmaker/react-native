import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to track details"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
