import { Component, OnInit } from '@angular/core';
import {Plant} from '../app/models/Plant'
import { PlantService } from './plant.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  plants: Plant[]=[]



constructor(private plantService: PlantService) {}

ngOnInit() {
this.plantService.fetchPlants().subscribe(response=>{
  this.plants=response.plants
})
}

addPlant(newPlant: Plant){
  this.plantService.addPlant(newPlant).subscribe (response => {
    this.plants=[response.plant, ...this.plants ]
  console.log (newPlant);
})
}

// dateConverter(date:string) {
// return `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(0,4)}`
// }
}
