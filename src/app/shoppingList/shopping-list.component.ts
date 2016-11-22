import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;
  submitted = false;
  active = true;
  myForm: FormGroup;
  errorMessage: string;

  constructor(
    private shoppingListService: ShoppingListService,
    fb: FormBuilder
  ) { 
    this.myForm = fb.group({
      name: [""],
      amount: [],
      size: [""]
    });
   }

  ngOnInit(): any {
    this.getIngredients();
  }

  getIngredients() {
    this.shoppingListService.getIngredients()
      .subscribe(
        ingredients => this.ingredients = ingredients,
        error => this.errorMessage = <any>error
      );
  }

  onSubmit(value: any): void {
    this.submitted = true;

    let id = guidGenerator();
    let name = value.name;
    let amount = value.amount;
    let size = value.size;

    this.shoppingListService.addIngredient(id, name, amount, size)
      .then(ingredient => {
        this.ingredients.push(ingredient);
      });

    this.myForm.reset();
    console.log(this.ingredients);
  }

  delete(ingredient: Ingredient): void {
    this.shoppingListService.deleteIngredient(ingredient.id)
      .subscribe(
        () => { this.ingredients = this.ingredients.filter(i => i.id !== ingredient.id) },
        error => this.errorMessage = <any>error
      );
  }

}

function guidGenerator(): any {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}