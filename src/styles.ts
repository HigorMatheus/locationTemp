import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: aquamarine;
`;

export const Content = styled.View`
  padding: 40px;
  height: 500px;
`;

export const ClimeContent = styled.View`
  background-color: blue;
  width: 243px;
  height: 406px;
  padding: 20px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.Text`
  text-align: center;
  margin: 10px;
  font-size: 16px;
  color: #000;
`;

export const Temp = styled.Text`
  font-size: 40px;
  color: #fff;
`;
export const TextDetail = styled.Text`
  text-align: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
`;
export const TempMaxMin = styled.Text`
  text-align: center;
  font-size: 30px;
  color: #f3f3f3;
`;

export const Button = styled.TouchableOpacity`
  margin-top: auto;
  bottom: 0;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: aqua;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: #333;
  font-size: 24px;
`;
