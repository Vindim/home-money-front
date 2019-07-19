import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {combineLatest, Subscription} from 'rxjs';
import {Bill} from '../shared/models/bill.model';

@Component({
    selector: 'home-bill-page',
    templateUrl: './bill-page.component.html',
    styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

    private subscribtion: Subscription;

    constructor(private billService: BillService) {
    }

    ngOnInit() {
        this.subscribtion = combineLatest(
            this.billService.getBill(),
            this.billService.getCurrency()
        ).subscribe((data: [Bill, any]) => {
            console.log(data);
        });
    }

    ngOnDestroy() {
        this.subscribtion.unsubscribe();
    }


}
