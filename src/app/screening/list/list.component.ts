import { Component, ViewChild, OnInit } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {News} from '../../class/news';
import {NewsService} from '../../services/news.service';
import { Observable } from 'rxjs/Observable';
import { NewsInterface } from '../../interface/news';
import { Router } from '@angular/router';
import { StockInterface } from '../../interface/stock';
import { Stock } from '../../class/stock';

declare var require: any;
const data: any = require('../../shared/data/company.json'); 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})  

export class ListComponent implements OnInit  { 
    rows = [];
    temp = [];
    newsObservable:Observable<StockInterface>;
    stockInterface:StockInterface;
    stock:Stock;
    cssBox:string;
    // Table Column Titles
    columns = [
        { name: "Headline",width: 700 },
        { name: "Source",width:50 },
    ];


    @ViewChild(DatatableComponent) table: DatatableComponent;

    ngOnInit(): void {
        this.stock = new Stock();
        this.stock.ticker=null;
        this.cssBox="gradient-green-tea";
    }
    constructor(private router:Router, private newService:NewsService) {
    }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }


    onSearch(ticker,keyword){
        console.log("Ticker "+ticker.value+" keyWord "+keyword.value);
        this.newsObservable = this.newService.callNewsWS(ticker.value,keyword.value);
        this.newsObservable.subscribe((newsObservable) => {
            this.stockInterface = newsObservable;
            this.stock = this.stockInterface;
            this.temp = [...this.stock.listNews];
            this.rows = this.stock.listNews;
            if(this.stock.changesPrice>=0){
                this.cssBox="gradient-green-tea";
            }else{
                this.cssBox="gradient-ibiza-sunset";
            }
        }
        )
       // console.log ("stock "+this.stock.ticker+"  news size "+this.stock.listNews.length);        
    }
}