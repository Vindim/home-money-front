import {Component, EventEmitter, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../shared/services/categories.service';
import {Category} from '../../shared/models/category.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'home-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AddCategoryComponent implements OnDestroy {

    sub1: Subscription;

    @Output() onCategoryAdd = new EventEmitter<Category>();

    constructor(private categoriesService: CategoriesService) {
    }

    onSubmit(form: NgForm) {
        let {capacity} = form.value;
        const {name} = form.value;
        if (capacity < 0) {
            capacity *= -1;
        }
        const category = new Category(name, capacity);

        this.sub1 = this.categoriesService.addCategory(category).subscribe((newCategory: Category) => {
            form.reset();
            form.form.patchValue({capacity: 1});
            this.onCategoryAdd.emit(newCategory);
        });
    }

    ngOnDestroy(): void {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    }

}
