import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Plant } from './models/Plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  plants: Plant[]= [{
    name:"Glass Gem Corn",
    imageUrl: "https://urbangardenseed.com/wp-content/uploads/2021/07/00MAIN-3990-bjxx8a.jpg",
    description: "Glass Gem is something of a cross between true, modern popcorn and parching corn. Sturdy plants can reach 10 foot tall. Avg. ear size 6 to 8 inches. Requires a fairly long growing season for favorable yields. Bred by the late Carl Barnes, an Oklahoma Cherokee who dedicated his career to reclaiming and preserving seed of traditional Native American corns."

    }]
fetchPlants() {
return of(this.plants)
}
}
