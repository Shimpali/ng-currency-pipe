import { Component } from '@angular/core';
@Component({
  selector: 'currency-app',
  template: `
      <h3> Currency Pipe</h3>
			<div>
				<p> {{invoice_rate | currency : 'USD' : 'symbol': '1.2-4'}} </p>
				<p> {{haul_rate | currency : 'USD' : 'symbol': '1.2-4'}} </p>
			</div>
          `
})
export class CurrencyPipeComponent {
  invoice_rate = 0.12;
  haul_rate = 111.1234;
}
