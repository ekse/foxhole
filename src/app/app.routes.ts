import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacilityComponent } from "./facility/facility.component";

export const routes: Routes = [
  {
    path: '',
    title: 'Foxhole Toolkit',
    component: HomeComponent
  },
  {
    path: 'facility',
    title: 'Facility',
    component: FacilityComponent
  }
];
