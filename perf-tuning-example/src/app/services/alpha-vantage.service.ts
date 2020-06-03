import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlphaVantageService {

  private readonly ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) {
  }

  getSymbolSearch(keywords: string): Observable<any> {
    // @ts-ignore
    const url = `${this.ALPHA_VANTAGE_BASE_URL}?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;
    return this.http.get(url).pipe(map((response) => {
      // @ts-ignore
      return response.bestMatches as any;
    }));
  }
}
