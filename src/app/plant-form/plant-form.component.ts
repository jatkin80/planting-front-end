import { Component, OnInit } from '@angular/core';
import {Plant} from '../models/Plant'
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent implements OnInit {
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
}
