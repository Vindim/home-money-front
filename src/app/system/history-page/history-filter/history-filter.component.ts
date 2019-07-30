import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from '../../shared/models/category.model';

@Component({
    selector: 'home-history-filter',
    templateUrl: './history-filter.component.html',
    styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent {

    @Output() onFilterCancel = new EventEmitter<any>();
    @Output() onFilterApply = new EventEmitter<any>();

    @Input() categories: Category[] = [];

    selectedPeriod = 'd';
    selectedTypes = [];
    selectedCategories = [];

    timePeriods = [
        {type: 'd', label: 'День'},
        {type: 'w', label: 'Неделя'},
        {type: 'M', label: 'Месяц'},
    ];

    types = [
        {type: 'income', label: 'Доход'},
        {type: 'outcome', label: 'Расход'}
    ];

    closeFilter() {
        this.selectedTypes = [];
        this.selectedCategories = [];
        this.selectedPeriod = 'd';
        this.onFilterCancel.emit();
    }

    private calculateInputParams(field: string, checked: boolean, value: string) {
        if (checked) {
            if (this[field].indexOf(value) === -1) {
                this[field].push(value);
            }
        }
        else {
            this[field] = this[field].filter(i => i !== value);
        }
    }

    handleChangeType(target) {
        this.calculateInputParams('selectedTypes', target.checked, target.value);
    }

    handleChangeCategory(target) {
        this.calculateInputParams('selectedCategories', target.checked, target.value);
    }

    applyFilter() {
        this.onFilterApply.emit({
            types: this.selectedTypes,
            categories: this.selectedCategories,
            period: this.selectedPeriod
        });
    }

}
