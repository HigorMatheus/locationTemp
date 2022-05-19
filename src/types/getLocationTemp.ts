
export type GetLocationTemp = {
  load: (props:GetLocationTemp.Props) => Promise<GetLocationTemp.Response>;
};
export namespace GetLocationTemp{
  export type Props={
   latitude: string;
 longitude: string;
  }
  export type Response={
    main: {
      temp: number,
      temp_max: number,
      temp_min: number,
    },
    name: string,
    weather: [
      {description: string, 
        icon: string, 
        },
    ],
  }
}