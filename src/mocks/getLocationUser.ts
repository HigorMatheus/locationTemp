import faker from "@faker-js/faker";
import { GetLocationUser } from "../types";

export class GetLocationUserSpy implements GetLocationUser {
  loadLocation = async () => {
    return {
      currentLatitude: faker.random.numeric().toString(),
      currentLongitude: faker.random.numeric().toString(),
    };
  };
}