import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {StatusBar} from 'react-native';

import {useLocationUser} from './utils/getLocationUser';

import {
  Button,
  ButtonText,
  ClimeContent,
  Container,
  Content,
  Temp,
  TempMaxMin,
  TextDetail,
  Title,
} from './styles';
export type Clime = {
  city: string;
  feels_like: number;
  maxTemp: number;
  minTemp: number;
  temp: number;
};

const App = () => {
  const {currentLatitude, currentLongitude, loadLocation} = useLocationUser();
  const [clima, setClima] = useState<Clime | undefined>(undefined);
  const [isLoad, setIsLoad] = useState(false);

  const API_KEY = process.env.API_KEY;
  useEffect(() => {
    loadLocation();
  }, [loadLocation]);

  const geTemp = useCallback(async () => {
    setIsLoad(true);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&units=metric&appid=${API_KEY}`,
    );
    const dataClima = response.data;
    setClima({
      temp: Math.round(dataClima.main.temp),
      feels_like: Math.round(dataClima.main.feels_like),
      maxTemp: Math.round(dataClima.main.temp_max),
      minTemp: Math.round(dataClima.main.temp_min),
      city: dataClima.name,
    });

    setIsLoad(false);
  }, [API_KEY, currentLatitude, currentLongitude]);

  const handleLoad = useCallback(async () => {
    await geTemp();
  }, [geTemp]);
  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <Container>
        <Content>
          {clima?.temp && (
            <>
              <Title>local:{clima?.city}</Title>
              <ClimeContent>
                <TextDetail>Temperatura </TextDetail>
                <TempMaxMin>
                  <TextDetail>max: </TextDetail>
                  {clima?.maxTemp}ºC
                </TempMaxMin>
                <Temp>
                  <TextDetail>atual: </TextDetail>
                  {clima?.minTemp}ºC
                </Temp>

                <TempMaxMin>
                  <TextDetail>min: </TextDetail>
                  {clima?.minTemp}ºC
                </TempMaxMin>
              </ClimeContent>
            </>
          )}
        </Content>

        <Button onPress={handleLoad} disabled={isLoad}>
          <ButtonText>{clima?.city ? 'Recarregar' : 'buscar dados'}</ButtonText>
        </Button>
      </Container>
    </>
  );
};

export default App;
