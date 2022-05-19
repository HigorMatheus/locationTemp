import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#2F2CBC', '#4BB5F1'],
  start: {x: 0.6, y: 0},
  end: {x: 0, y: 0.8},
})`
  flex: 1;
  background-color: aquamarine;
  padding: 16px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px;
  padding-bottom: 60px;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: 'Roboto-Bold';
  margin: 10px;
  font-size: 36px;
  width: 100%;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 36px;
`;
