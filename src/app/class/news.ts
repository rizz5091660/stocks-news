import { NewsInterface } from "../interface/news";

export class News implements NewsInterface{
    headline:string;
    url:string;
    summary:string;
    source:string;
    date:Date;
}