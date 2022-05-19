import faker from "@faker-js/faker"
import { GetLocationTemp } from "../types"

export const mockClima=():GetLocationTemp.Response=>{
  return  {
    main: {
      temp: faker.datatype.number(),
      temp_max: faker.datatype.number(),
      temp_min: faker.datatype.number(),
    },
    name: faker.name.jobArea(),
    weather: [
      {description: faker.datatype.uuid(), 
        icon: faker.datatype.string(), 
        },
    ],
  }
}
interface GetLocationTempSpyProps{
  clima?:GetLocationTemp.Response
}
export class GetLocationTempSpy implements GetLocationTemp {
  clima={} as GetLocationTemp.Response
  // currentLongitude = '';
  constructor({clima}:GetLocationTempSpyProps={}){
    this.clima=clima?clima:{}as GetLocationTemp.Response

  }
 async load (_:GetLocationTemp.Props): Promise<GetLocationTemp.Response>{
    return this.clima
  }
}