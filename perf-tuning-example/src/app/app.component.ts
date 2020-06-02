import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'perf-tuning-example';
  // @ts-ignore
  alphaVantageApiKey = process.env.ALPHA_VANTAGE_API_KEY;
}
