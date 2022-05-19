import React from 'react';
import {StatusBar} from 'react-native';

import {Home} from './pages/home';
import { RemoteGetLocationTemp, RemoteGetLocationUser } from './services';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Home 
        getLocationUser={new RemoteGetLocationUser()} 
        getLocationTemp={new RemoteGetLocationTemp()} 
      />
    </>
  );
};

export default App;
