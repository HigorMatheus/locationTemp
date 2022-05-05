export type Response = {
  base: 'stations';
  clouds: {all: 40};
  cod: 200;
  coord: {lat: -23.6535; lon: -46.7319};
  dt: 1651706015;
  id: 3467722;
  main: {
    feels_like: 16.03;
    humidity: 74;
    pressure: 1015;
    temp: 16.4;
    temp_max: 16.89;
    temp_min: 16.15;
  };
  name: 'Campo Limpo';
  sys: {
    country: 'BR';
    id: 8446;
    sunrise: 1651656522;
    sunset: 1651696717;
    type: 1;
  };
  timezone: -10800;
  visibility: 10000;
  weather: [
    {description: 'scattered clouds'; icon: '03n'; id: 802; main: 'Clouds'},
  ];
  wind: {deg: 320; speed: 7.2};
};

export type Clime = {
  city?: string;
  feels_like?: number;
  maxTemp?: number;
  minTemp?: number;
  time?: string;
  temp?: number;
  weather?: {description?: string; icon?: string};
};
