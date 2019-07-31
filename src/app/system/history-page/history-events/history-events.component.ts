import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {HomeEvent} from '../../shared/models/event.model';

@Component({
    selector: 'home-history-events',
    templateUrl: './history-events.component.html',
    styleUrls: ['./history-events.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HistoryEventsComponent implements OnInit {

    @Input() categories: Category[] = [];
    @Input() events: HomeEvent[] = [];

    searchValue = '';
    searchPlaceholder = 'Сумма';
    searchField = 'amount';


    constructor() {
    }

    ngOnInit() {
        this.events.forEach((e) => {
            e.catName = this.categories.find(c => c.id === e.category).name;
        });
    }

    getEventClass(e: HomeEvent) {
        return {
            label: true,
            'label-danger': e.type === 'outcome',
            'label-success': e.type === 'income'
        };
    }

    changeCriteria(field: string) {
        const namesMap = {
            amount: 'Сумма',
            date: 'Дата',
            category: 'Категория',
            type: 'Тип'
        };

        this.searchPlaceholder = namesMap[field];
        this.searchField = field;
    }

}
