import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plant-listing',
  templateUrl: './plant-listing.component.html',
  styleUrls: ['./plant-listing.component.css']
})
export class PlantListingComponent  {
@Input()  name!: string;
@Input()  description!: string;
@Input()  imageUrl!:string;
@Input() dateAdded!:string;
}
