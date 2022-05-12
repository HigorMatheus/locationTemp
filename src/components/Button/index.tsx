import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, ButtonText} from './styles';
import {ButtonProps} from './types';

export const Button = ({city, isLoading, ...rest}: ButtonProps) => {
  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator testID="loading" color="#fff" />
      ) : (
        <ButtonText>{city ? 'Recarregar' : 'Buscar dados'}</ButtonText>
      )}
    </Container>
  );
};
