import { Injectable } from '@angular/core';
import { Plant } from './models/Plant';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type PlantsResponse= {
plants:Plant[];
}

type PlantResponse= {
plant:Plant;
}

const plantsEndpoint=`${environment.baseApiUrl}/plants`
@Injectable({
  providedIn: 'root'
})
export class PlantService {


    constructor(private http: HttpClient){}
fetchPlants() {
return this.http.get<PlantsResponse>(plantsEndpoint)
}

addPlant(plant: Plant) {
  return this.http.post<PlantResponse>(plantsEndpoint, plant)
}
}
