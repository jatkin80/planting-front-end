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
  title = 'Planting Peace';


constructor(private plantService: PlantService) {}

ngOnInit() {
this.plantService.fetchPlants().subscribe(response=>{
  this.plants=response.plants
})
}
}
