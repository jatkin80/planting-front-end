import { Component, OnInit } from '@angular/core';
import { Plant} from '../models/Plant'
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  plants: Plant[]=[]



constructor(private plantService: PlantService) {}

ngOnInit() {
this.plantService.fetchPlants().subscribe(response=>{
  this.plants=response.plants
})
}
}
