export type Response = {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  weather: [{description: string; icon: string}];
};

export type Clime = {
  city?: string;
  maxTemp?: number;
  minTemp?: number;
  time?: string;
  temp?: number;
  weather?: {description?: string; icon?: string};
};
