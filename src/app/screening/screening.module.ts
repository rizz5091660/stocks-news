import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ScreeningRoutingModule } from './screening-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NewsService} from './../services/news.service';
import {HttpClientModule,} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ScreeningRoutingModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  declarations: [ListComponent],
  providers: [NewsService],
})
export class ScreeningModule { }
