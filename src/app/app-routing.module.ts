import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantFormComponent } from './plant-form/plant-form.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard',pathMatch: 'full' },
  { path: 'plants', component: PlantFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
