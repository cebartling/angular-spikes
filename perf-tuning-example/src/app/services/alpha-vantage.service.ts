import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
import {SymbolSearchMatch} from '../models/symbol-search-match';

@Injectable({
  providedIn: 'root'
})
export class AlphaVantageService {

  private readonly ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) {
  }

  getSymbolSearch(keywords: string): Observable<Array<SymbolSearchMatch>> {
    const jsonConvert: JsonConvert = new JsonConvert();
    jsonConvert.operationMode = OperationMode.ENABLE; // print some debug data
    jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

    // @ts-ignore
    const url = `${this.ALPHA_VANTAGE_BASE_URL}?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;
    return this.http.get(url).pipe(map((response) => {
      // @ts-ignore
      return response.bestMatches.map((match) => jsonConvert.deserializeObject(match, SymbolSearchMatch));
    }));
  }
}
