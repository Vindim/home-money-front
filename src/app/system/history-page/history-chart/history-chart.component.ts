import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'home-history-chart',
    templateUrl: './history-chart.component.html',
    styleUrls: ['./history-chart.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HistoryChartComponent {

    @Input() data;

}
