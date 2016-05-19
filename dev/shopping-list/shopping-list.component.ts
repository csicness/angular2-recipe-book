import { Component, OnInit } from 'angular2/core';
import { ShoppingListEditComponent } from './shopping-list-edit.component';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
	template: `
		<h1>Shopping List</h1>
		<my-shopping-list-edit [ingredient]="selectedItem"></my-shopping-list-edit>
		<div class="shoppingList">
			<button class="btn" (click)="onAddItem()">Add New Item</button>
			<ul>
				<li *ngFor="#item of shoppingList" (click)="onSelectItem(item)">{{ item.name }} ({{ item.amount }})</li>
			</ul>
		</div>
	`,
	directives: [ShoppingListEditComponent],
	providers: [ShoppingListService]
})

export class ShoppingListComponent implements OnInit {
	shoppingList: Ingredient[];
	selectedItem: Ingredient = null;

	constructor(private _shoppingListService: ShoppingListService) {}

	ngOnInit():any {
		this.shoppingList = this._shoppingListService.getAllItems();
	}

	onSelectItem(item: Ingredient) {
		this.selectedItem = item;
	}

	onAddItem() {
		this.selectedItem = null;
	}


}