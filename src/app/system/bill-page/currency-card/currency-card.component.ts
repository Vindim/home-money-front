import {Component, Input} from '@angular/core';

@Component({
    selector: 'home-currency-card',
    templateUrl: './currency-card.component.html',
    styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {

    @Input() currency: any;
    currencies: string[] = ['usd', 'eur'];

}
