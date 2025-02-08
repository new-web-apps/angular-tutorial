import { Injectable } from '@angular/core'
import { HousingLocation } from './housinglocation'

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common'
  url = 'http://localhost:3000/locations'

  housingLocationList: HousingLocation[] = []

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url)
    return ((await data.json()) as HousingLocation[]) ?? []
  }
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return (await data.json()) || undefined
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    )
  }
}
