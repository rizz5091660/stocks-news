import { News } from "../class/news";

export interface StockInterface{
    ticker:string;
    name:string;
    openPrice:number;
    closePrice:number;
    changesPrice:number;
    listNews:News[];
}