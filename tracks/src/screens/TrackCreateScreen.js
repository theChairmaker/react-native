import React, { useEffect, useState } from 'react';
import { StyleSheet, PermissionsAndroid } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permission to access location for tracking',
          message:
            'This app needs location permissions so it can \
            create tracks for users.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use location');
      } else {
        setErr('Location permission denied');
      }
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
