import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';

const appRoutes:Routes=[
  {
    path:"",
    component:UsersComponent
  },
  {
    path:"about",
    component:AboutComponent
  }
];

export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes);


