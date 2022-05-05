import React from 'react';
import {Clime} from '../../type';
import {
  Container,
  TextDetail,
  TextDate,
  IconImage,
  Temp,
  TextInfo,
} from './styles';

type ClimeDetailsProps = {
  clima?: Clime;
};
export const ClimeDetails = ({clima}: ClimeDetailsProps) => {
  return (
    <>
      {clima?.temp ? (
        <>
          <TextDate>{clima?.time}</TextDate>
          <TextDetail>{clima?.weather?.description}</TextDetail>
          <IconImage
            source={{
              uri: `http://openweathermap.org/img/wn/${clima?.weather?.icon}@2x.png`,
            }}
          />
          <Temp>{clima?.temp ? clima?.temp + 'Cº' : '300Cº'}</Temp>
        </>
      ) : (
        <Container>
          <TextInfo>
            precisamos de {'\n'} sua localização {'\n'} para mostrar o{'\n'}{' '}
            clima atual
          </TextInfo>
        </Container>
      )}
    </>
  );
};
