import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#2F2CBC', '#4BB5F1'],
  start: {x: 0.6, y: 0},
  end: {x: 0, y: 0.8},
})`
  border-radius: 50px;
  padding: 25px;
`;

export const Content = styled.View.attrs({
  shadowColor: '#5655A0',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.8,
  shadowRadius: 10.84,
  elevation: 5,
})`
  padding: 40px;
  /* padding-bottom: 60px; */
  border-radius: 50px;
  align-items: center;
  background-color: #22fcbc70;
`;
export const TextDate = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const IconImage = styled.ImageBackground`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  margin: 20px;
`;
export const IconNotImage = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 25px;
  background-color: aqua;
  opacity: 0.5;
`;

export const ClimeContent = styled(LinearGradient).attrs({
  colors: ['#4BB5F1', '#2F2CBC'],
  start: {x: 0.6, y: 0},
  end: {x: 0, y: 0.8},
})`
  width: 250px;
  height: 250px;
  padding: 24px;
  border-radius: 32px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.Text`
  text-align: center;
  margin: 10px;
  font-size: 'Roboto-Regular';
  font-size: 36px;
  margin-bottom: 16px;
  color: #fff;
`;

export const Temp = styled.Text`
  font-size: 40px;
  font-size: 'Roboto-Medium';
  color: #fff;
`;
export const TextDetail = styled.Text`
  text-align: center;
  justify-content: center;
  font-size: 20px;
  font-size: 'Roboto-Medium';
  color: #fff;
`;
export const TextInfo = styled.Text`
  text-align: center;
  justify-content: center;
  font-size: 32px;
  font-family: 'Roboto-Regular';
  color: #fff;
`;
export const TempMaxMin = styled.Text`
  text-align: center;
  font-size: 30px;
  color: #f3f3f3;
`;
