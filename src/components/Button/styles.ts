import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  margin-top: auto;
  bottom: 16px;
  height: 70px;
  border-radius: 8px;
  background-color: #2f2cbc50;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: 'Roboto-Regular';
`;
