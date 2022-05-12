import React from 'react';
import {ClimeDetails} from '.';
import {render} from '@testing-library/react-native';
describe('ClimeDetails', () => {
  it('render correct ClimeDetails', () => {
    const {getByText} = render(<ClimeDetails />);
    const text = getByText(
      /precisamos de sua localização para mostrar o clima atual/i,
    );

    expect(text).toBeTruthy();
  });
  it('should to render clima', () => {
    const clima = {
      temp: 16,
    };
    const {getByText} = render(<ClimeDetails clima={clima} />);
    const text = getByText(clima.temp + 'Cº');

    expect(text).toBeTruthy();
  });
});
