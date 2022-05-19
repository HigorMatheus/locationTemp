// import React from 'react';
// import App from './App';
// // import faker from 'faker';
// import {fireEvent, render} from '@testing-library/react-native';
// import {mockUseLocationUser} from './mock';
// // import {mockGeolocation} from './__tests__/mocks';
// // import {mockGeolocation} from './__tests__/mocks';
// // export const mockedGeolocation = {
// //   addListener: jest.fn(),
// //   getCurrentPosition: jest.fn(),
// //   removeListeners: jest.fn(),
// //   requestAuthorization: jest.fn(),
// //   setConfiguration: jest.fn(),
// //   startObserving: jest.fn(),
// //   stopObserving: jest.fn(),
// // };

// // type FunctionType = keyof typeof mockedGeolocation;

// // export const mockGeolocation = (funType: FunctionType, Obj: Object) => {
// //   mockedGeolocation[funType].mockRejectedValueOnce({Obj});
// // };
// // jest.mock(
// //   'react-native/Libraries/PermissionsAndroid/PermissionsAndroid',
// //   () => ({
// //     PermissionsAndroid: {
// //       RESULTS: {GRANTED: 'granted'},
// //       request: () => {
// //         true;
// //       },
// //       check: () => {
// //         true;
// //       },
// //     },
// //   }),
// // );
// jest.mock('@react-native-community/geolocation', () => {
//   return {
//     addListener: jest.fn(),
//     getCurrentPosition: jest.fn(),
//     removeListeners: jest.fn(),
//     requestAuthorization: jest.fn(),
//     setConfiguration: jest.fn(),
//     startObserving: jest.fn(),
//     stopObserving: jest.fn(),
//   };
// });

// describe('ClimeDetails', () => {
//   it('render correct ClimeDetails', () => {
//     mockUseLocationUser();
//     // mockGeolocation('getCurrentPosition', {
//     //   coords: {
//     //     latitude: 6565376247625,
//     //     longitude: 6565376247625,
//     //   },
//     // });
//     const {getByText} = render(<App />);
//     const text = getByText(
//       /precisamos de sua localização para mostrar o clima atual/i,
//     );

//     expect(text).toBeTruthy();

//     fireEvent.press(getByText('Buscar dados'));
//   });
//   // it('should to render clima', () => {
//   //   const clima = {
//   //     temp: 16,
//   //   };
//   //   const {getByText} = render(<ClimeDetails clima={clima} />);
//   //   const text = getByText(clima.temp + 'Cº');

//   //   expect(text).toBeTruthy();
//   // });
// });
