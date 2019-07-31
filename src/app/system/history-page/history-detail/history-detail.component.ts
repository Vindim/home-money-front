import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {EventsService} from '../../shared/services/events.service';
import {CategoriesService} from '../../shared/services/categories.service';
import {mergeMap} from 'rxjs/operators';
import {HomeEvent} from '../../shared/models/event.model';
import {Category} from '../../shared/models/category.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'home-history-detail',
    templateUrl: './history-detail.component.html',
    styleUrls: ['./history-detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HistoryDetailComponent implements OnInit, OnDestroy {

    event: HomeEvent;
    category: Category;

    isLoaded = false;
    sub1: Subscription;

    constructor(private route: ActivatedRoute, private eventService: EventsService, private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.sub1 = this.route.params.pipe(
            mergeMap((params: Params) => this.eventService.getEventById(params['id']))).pipe(
                mergeMap((event: HomeEvent) => {
                    this.event = event;
                    return this.categoriesService.getCategoryById(event.category);
                })
        ).subscribe((category: Category) => {
            this.category = category;
            this.isLoaded = true;
        });

    }

    ngOnDestroy(): void {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    }

}
