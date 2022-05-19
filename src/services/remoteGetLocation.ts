import Geolocation from '@react-native-community/geolocation';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import { GetLocationUser, LoadLocationResponse } from '../types';

export class RemoteGetLocationUser implements GetLocationUser {
  currentLatitude = '';
  currentLongitude = '';
  loadLocation = async (): Promise<LoadLocationResponse> => {
    const getLocation = (): LoadLocationResponse => {
      Geolocation.getCurrentPosition(
        position => {
          const getCurrentLatitude = JSON.stringify(position.coords.latitude);
          const getCurrentLongitude = JSON.stringify(position.coords.longitude);
          this.currentLatitude = getCurrentLatitude;
          this.currentLongitude = getCurrentLongitude;
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
   
      return {
        currentLatitude: this.currentLatitude,
        currentLongitude: this.currentLongitude,
      };
    };
    if (Platform.OS === 'ios') {
      return getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de acesso a localização',
            buttonNegative: 'Nâo',
            buttonNeutral: 'cancel',
            buttonPositive: 'sim',
            message: 'para ter o clima da sua cidade',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return getLocation();
        } else {
          Alert.alert('permissão negada');
          return {
            currentLatitude: this.currentLatitude,
            currentLongitude: this.currentLongitude,
          };
        }
      };
      return await requestLocationPermission();
    }
  };
}
