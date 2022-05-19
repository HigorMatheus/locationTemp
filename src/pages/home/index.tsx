import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Button} from '../../components/Button';
import {ClimeDetails} from '../../components/ClimeDetails';
import {api} from '../../services';
import { Clime, UserLocation } from './types';
import { GetLocationTemp, GetLocationUser } from '../../types';
import {Container, Content, Title} from './styles';

interface HomeProps {
  getLocationUser: GetLocationUser;
  getLocationTemp: GetLocationTemp
}
export function Home({getLocationUser,getLocationTemp}: HomeProps) {
  const [userLocation, setUserLocation] = useState<UserLocation|null>();
  const [clima, setClima] = useState<Clime | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.API_KEY;
  const loadInfo = useCallback(async () => {
    const {currentLatitude, currentLongitude} =
      await getLocationUser.loadLocation();
    console.log({
      currentLatitude,
      currentLongitude,
    });

    setUserLocation({
      latitude: currentLatitude,
      longitude: currentLongitude,
    });
  }, [getLocationUser]);
  useEffect(() => {
    loadInfo();
  }, [loadInfo]);

  const geTemp = useCallback(async () => {
    
    if(userLocation===null)return
    setIsLoading(true);
    try {
      const dataClima = await getLocationTemp.load({
        latitude: userLocation?.latitude!,
        longitude:userLocation?.longitude!
      }

    )
      // api.get(
      //   `/data/2.5/weather?lat=${userLocation?.latitude}&lon=${userLocation?.longitude}&units=metric&lang=pt&appid=${API_KEY}`,
      // );

      const time = new Date().toLocaleTimeString();

      setClima({
        temp: Math.round(dataClima.main.temp),
        maxTemp: Math.round(dataClima.main.temp_max),
        minTemp: Math.round(dataClima.main.temp_min),
        city: dataClima.name,
        weather: dataClima.weather[0],
        time,
      });
    } catch (error) {
      console.log({error});
    }

    setIsLoading(false);
  }, [API_KEY, userLocation?.latitude, userLocation?.longitude]);

  const handleLoad = useCallback(async () => {
    if (userLocation?.latitude) {
      await geTemp();
    } else {
      loadInfo();
    }
  }, [userLocation?.latitude, userLocation?.longitude, geTemp, loadInfo]);
  useEffect(() => {
    (async () => {
      if (userLocation?.latitude) {
        geTemp();
      }
    })();
  }, [userLocation?.latitude, userLocation?.longitude, geTemp]);
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Container>
        <Content>
          <Title>{clima?.city}</Title>
          <ClimeDetails clima={clima} />
        </Content>
        <Button
          onPress={handleLoad}
          disabled={isLoading}
          isLoading={isLoading}
          city={clima?.city}
        />
      </Container>
    </>
  );
}
