import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {}

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmt = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmt);
        this.shoppingListService.addItem(newIngredient);
    }
}
