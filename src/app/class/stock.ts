import { StockInterface } from "../interface/stock";
import { News } from "../class/news";

export class Stock implements StockInterface{
    ticker:string;
    name:string;
    open:number;
    close:number;
    changes:number;
    high:number;
    low:number;
    listNews: News[]; 
}