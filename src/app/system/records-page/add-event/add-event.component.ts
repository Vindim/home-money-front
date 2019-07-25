import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {NgForm} from '@angular/forms';
import {HomeEvent} from '../../shared/models/event.model';
import * as moment from 'moment';

@Component({
    selector: 'home-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

    @Input() categories: Category[];
    types = [
        {type: 'income', label: 'Доход'},
        {type: 'outcome', label: 'Расход'}
        ];

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        let {amount} = form.value;
        const {category, description, type} = form.value;
        if (amount < 0) {
            amount *= -1;
        }

        const event = new HomeEvent(type, amount, +category, moment().format('DD.MM.YYYY HH:mm:ss'), description);
    }

}
