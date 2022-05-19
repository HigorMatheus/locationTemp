import { api } from '.';
import { GetLocationTemp } from '../types';

export class RemoteGetLocationTemp implements GetLocationTemp{
  async load({latitude,longitude}:GetLocationTemp.Props):Promise<GetLocationTemp.Response> {
    const API_KEY = process.env.API_KEY;
    const response = await api.get(
      `/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt&appid=${API_KEY}`,
    );
    return response.data;
  }
}