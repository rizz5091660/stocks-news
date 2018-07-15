import { StockInterface } from "../interface/stock";
import { News } from "../class/news";

export class Stock implements StockInterface{
    ticker:string;
    name:string;
    openPrice:number;
    closePrice:number;
    changesPrice:number;
    listNews: News[]; 
}