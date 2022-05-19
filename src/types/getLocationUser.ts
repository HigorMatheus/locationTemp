export type LoadLocationResponse = {
  currentLatitude: string;
  currentLongitude: string;
};
export type GetLocationUser = {
  loadLocation: () => Promise<LoadLocationResponse>;
};