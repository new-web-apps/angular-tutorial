import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HousingService } from '../housing.service'
import { HousingLocation } from '../housinglocation'
import { CommonModule } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule], // работает и без импорта CommonModule
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService = inject(HousingService)
  housingLocation: HousingLocation | undefined
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
  run = async () => {
    const housingLocationId = Number(this.route.snapshot.params['id'])
    this.housingLocation =
      await this.housingService.getHousingLocationById(housingLocationId)
  }
  constructor() {
    this.run()
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.form.value.firstName || '',
      this.form.value.lastName || '',
      this.form.value.email || ''
    )
  }
}
