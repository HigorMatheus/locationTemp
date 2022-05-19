import React from 'react';
import { Home } from '.';
import faker from '@faker-js/faker'

import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { GetLocationUserSpy, GetLocationTempSpy } from '../../mocks';
import { GetLocationTemp, GetLocationUser } from '../../types';


type SutProps = {
  getLocationUser?: GetLocationUserSpy;
  getLocationTemp?: GetLocationTempSpy;
};
const makeSut = ({
  getLocationUser = new GetLocationUserSpy(),
  getLocationTemp = new GetLocationTempSpy()
}: SutProps = {}) => {
  const sut = render(<Home
    getLocationUser={getLocationUser}
    getLocationTemp={getLocationTemp}
  />);
  return {
    sut,
  };
};

describe('Home', () => {
  it('render correct Home', () => {
    const { sut } = makeSut();
    const text = sut.getByText(
      /precisamos de sua localização para mostrar o clima atual/i,
    );

    expect(text).toBeTruthy();

    fireEvent.press(sut.getByText('Buscar dados'));
  });
  it('should to render clima', async () => {
    const clima: GetLocationTemp.Response = {
      main: {
        temp: faker.datatype.number(),
        temp_max: faker.datatype.number(),
        temp_min: faker.datatype.number(),
      },
      name: faker.name.jobArea(),
      weather: [
        {
          description: faker.datatype.uuid(),
          icon: faker.datatype.string(),
        },
      ],
    }
    const getLocationUser = new GetLocationUserSpy()
    const { sut } = makeSut({ getLocationUser, getLocationTemp: new GetLocationTempSpy({ clima }) });
    await getLocationUser.loadLocation();
    await waitFor(() => {
      const text = sut.getByTestId('tempAtual')

      expect(text.children[0]).toEqual(Math.round(clima.main.temp) + 'Cº')
    })

  });
});
