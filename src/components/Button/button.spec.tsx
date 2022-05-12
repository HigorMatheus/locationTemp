import React from 'react';
import {Button} from '.';
import {render} from '@testing-library/react-native';
describe('Button', () => {
  it('render correct button', () => {
    const {getByText} = render(<Button />);
    const text = getByText(/Buscar dados/i);

    expect(text).toBeTruthy();
  });
  it('loading correct button', () => {
    const {getByTestId} = render(<Button isLoading />);
    const text = getByTestId(/loading/i);

    expect(text).toBeTruthy();
  });
  it('should to recurred correct button', () => {
    const {getByText} = render(<Button city="city" />);
    const text = getByText(/Recarregar/i);

    expect(text).toBeTruthy();
  });
});
