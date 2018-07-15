import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from 'app/screening/list/list.component';

const routes: Routes = [
  {
    path: '',
     component: ListComponent,
    data: {
      title: 'List Screening'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreeningRoutingModule { }
