export type Clime = {
  city?: string;
  maxTemp?: number;
  minTemp?: number;
  time?: string;
  temp?: number;
  weather?: {description?: string; icon?: string};
};
export type UserLocation={
  latitude?: string;
  longitude?: string;
}|null