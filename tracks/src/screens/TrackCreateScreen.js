import React, { useEffect, useState } from 'react';
import { StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const callLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        // console.log('Current position is: ', position);
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      (error) => {
        console.log(
          'Error in getting the position: ',
          error.code,
          error.message
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5000,
        distanceFilter: 10
      }
    );
    const watchID = Geolocation.watchPosition(
      (position) => {
        // console.log('Position changed to: ', position);
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      (error) => {
        console.log('Error in position changed: ', error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        interval: 5000,
        distanceFilter: 10
      }
    );
    return watchID;
  };
  const requestLocationPermission = async () => {
    let watchID = null;
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
        watchID = callLocation();
      } else {
        setErr('Location permission denied');
      }
      return watchID;
    } catch (err) {
      setErr(err);
      return watchID;
    }
  };

  useEffect(() => {
    let watchID = null;
    if (Platform.OS === 'android') {
      watchID = requestLocationPermission();
    }
    // else if (Platform.OS === 'ios') {
    //   try {
    //     Geolocation.requestAuthorization('always');
    //   } catch (err) {
    //     console.log('Promise loc perm: ', err);
    //   }
    //   watchID = callLocation();
    // }
    return () => {
      watchID ? Geolocation.clearWatch(watchID) : null;
    };
  });

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
      <Text>Current latitude is: {latitude}</Text>
      <Text>Current longitude is: {longitude}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
