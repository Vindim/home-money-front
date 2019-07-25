import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
    selector: 'home-bill-card',
    templateUrl: './bill-card.component.html',
    styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

    @Input() bill: Bill;
    @Input() currency: any;

    dollar: number;
    euro: number;

    constructor() {
    }

    ngOnInit() {
        const {usd, eur} = this.currency;
        this.dollar = usd.rate * this.bill.value;
        this.euro = eur.rate * this.bill.value;
    }

}
