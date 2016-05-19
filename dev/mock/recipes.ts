import { Recipe } from '../shared/recipe';
import { Ingredient } from '../shared/ingredient';


export let RECIPES: Recipe[] = [
	
	new Recipe(
		'Wiener Schnitzel',
		'A tasty Schnitzel',
		'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
		[
			new Ingredient('Pork Meat', 1),
			new Ingredient('French Fries', 1),
			new Ingredient('Salad', 2)
		]

	),

	new Recipe(
		'Fish N Chips',
		`Place potatoes in a medium-size bowl of cold water. 
		In a separate medium-size mixing bowl, mix together flour, baking powder, salt, and pepper. 
		Stir in the milk and egg; stir until the mixture is smooth. Let mixture stand for 20 minutes.

		Preheat the oil in a large pot or electric skillet to 350 degrees F (175 degrees C).
		Fry the potatoes in the hot oil until they are tender.Drain them on paper towels.

		Dredge the fish in the batter, one piece at a time, and place them in the hot oil. 
		Fry until the fish is golden brown.
		If necessary, increase the heat to maintain the 350 degrees F (175 degrees C) temperature.
		Drain well on paper towels.
		Fry the potatoes again for 1 to 2 minutes for added crispness.`,
		'https://samueladams.s3.amazonaws.com/app_assets/beer-batter-for-fish-n-chips--en--bee9d0c1-1f0d-4141-b49e-b3fd3ca4a586.jpg',
		[
			new Ingredient('Fish', 1),
			new Ingredient('French Fries', 1),
			new Ingredient('Coleslaw', 2),
			new Ingredient('lemon', 2)
		]

	)
];