import {Component} from '@angular/core';
import {AlphaVantageService} from './services/alpha-vantage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private alphaVantageService: AlphaVantageService) {
  }

  async onClickButton() {
    const symbolSearch = await this.alphaVantageService.getSymbolSearch('MSFT').toPromise();
    console.log(symbolSearch);
  }
}
