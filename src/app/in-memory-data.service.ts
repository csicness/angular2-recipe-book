import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let ingredients = [
            {id: 1, name: 'carrot', amount: 2}
        ];
        let recipes = [
            {
                id: 1, 
                name: 'Milkshake',
                description: 'A delicious milkshake',
                directions: `
                    Step 1: Combine milk and ice cream into a blender.
                    Step 2: Blend for about 3 minutes.
                    Step 3: Pour into a glass.
                `,
                imageUrl: 'http://cdn3.craftsy.com/blog/wp-content/uploads/2016/02/milkshakes-9.jpg',
                ingredients: [
                    {name: 'Milk', amount: 1, size: 'cup'}, 
                    {name: 'Ice Cream', amount: 2, size: 'oz'}
                ]
            }
        ];

        return {
            ingredients,
            recipes
        };
    }
}