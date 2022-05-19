import React from 'react';
import {StatusBar} from 'react-native';

import {Home} from './pages/home';
import { RemoteGetLocationTemp, RemoteGetLocationUser } from './services';
// import {GetLocation} from './services';

const App = () => {
  // const {currentLatitude, currentLongitude, loadLocation} = useLocationUser();
  // const [clima, setClima] = useState<Clime | undefined>(undefined);
  // const [isLoading, setIsLoading] = useState(false);

  // const API_KEY = process.env.API_KEY;
  // useEffect(() => {
  //   loadLocation();
  // }, [loadLocation]);

  // const geTemp = useCallback(async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await api.get(
  //       `/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&units=metric&lang=pt&appid=${API_KEY}`,
  //     );
  //     const dataClima = response.data as Response;
  //     console.log(response.data);
  //     const time = new Date().toLocaleTimeString();

  //     setClima({
  //       temp: Math.round(dataClima.main.temp),
  //       maxTemp: Math.round(dataClima.main.temp_max),
  //       minTemp: Math.round(dataClima.main.temp_min),
  //       city: dataClima.name,
  //       weather: dataClima.weather[0],
  //       time,
  //     });
  //   } catch (error) {
  //     console.log({error});
  //   }

  //   setIsLoading(false);
  // }, [API_KEY, currentLatitude, currentLongitude]);

  // const handleLoad = useCallback(async () => {
  //   if (currentLatitude && currentLongitude) {
  //     await geTemp();
  //   } else {
  //     loadLocation();
  //   }
  // }, [currentLatitude, currentLongitude, geTemp, loadLocation]);
  // useEffect(() => {
  //   (async () => {
  //     if (currentLatitude && currentLongitude) {
  //       geTemp();
  //     }
  //   })();
  // }, [currentLatitude, currentLongitude, geTemp]);
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
