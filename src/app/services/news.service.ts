import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {NewsInterface} from '../interface/news';
import {StockInterface } from '../interface/stock';

@Injectable()
export class NewsService{
    stock:StockInterface;
    url_stock_news_ws:string="http://localhost:8080/news?";
    
    constructor(private http:HttpClient){
    }

    callNewsWS(ticker:string,keyword:string):Observable<StockInterface>{
        return this.http.get<StockInterface>(this.url_stock_news_ws+"t="+ticker+"&k="+keyword);
      }
}