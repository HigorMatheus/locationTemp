import Geolocation from '@react-native-community/geolocation';
import {useCallback, useState} from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

export const useLocationUser = () => {
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [watchId, setWatchId] = useState(0);
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const getCurrentLatitude = JSON.stringify(position.coords.latitude);
        const getCurrentLongitude = JSON.stringify(position.coords.longitude);
        setCurrentLatitude(getCurrentLatitude);
        setCurrentLongitude(getCurrentLongitude);
      },
      error => {
        Alert.alert(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 1000,
      },
    );
    const watchID = Geolocation.watchPosition(position => {
      const getCurrentLatitude = JSON.stringify(position.coords.latitude);
      const getCurrentLongitude = JSON.stringify(position.coords.longitude);
      setCurrentLatitude(getCurrentLatitude);
      setCurrentLongitude(getCurrentLongitude);
    });
    setWatchId(watchID);
  };

  const loadLocation = useCallback(async () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de acesso a localização',
            buttonNegative: 'nao',
            buttonNeutral: 'cancel',
            buttonPositive: 'sim',
            message: 'test',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert('permissão negada');
        }
      };
      await requestLocationPermission();
    }
  }, []);
  return {
    currentLatitude,
    currentLongitude,
    loadLocation,
    watchId,
  };
};
