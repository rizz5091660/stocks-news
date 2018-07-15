import { News } from "../class/news";

export interface StockInterface{
    ticker:string;
    name:string;
    open:number;
    close:number;
    changes:number;
    high:number;
    low:number;
    listNews: News[]; 
}