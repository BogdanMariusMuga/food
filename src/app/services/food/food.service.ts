import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag'
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!
  }

  getAllFoodByTag(tag:string): Foods[]{
    if(tag == 'All')
      return this.getAll();
    else
      return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      {name: 'All', count: 11},
      {name: 'Breakfast', count: 2},
      {name: 'Lunch', count: 8},
      {name: 'Dinner', count: 2},
      {name: 'Hot', count: 6},
      {name: 'Cold', count: 1},
      {name: 'Meat', count: 3},
      {name: 'Dessert', count: 2},
      {name: 'Seafood', count: 2},
      {name: 'Vegetable', count: 1},
      {name: 'Pasta', count: 1},
      {name: 'Paella', count: 1},
      {name: 'Soup', count: 1},
      {name: 'Egg', count: 1}
    ];
  }
  getAll():Foods[]{
    return [
      {id: 1,
        price: 11.25,
        name: 'Pasta Greek style',
        favorite: false,
        star: 4,
        tags: ['Pasta', 'Lunch', 'Seafood', 'Hot'],
        imageUrl: 'assets/food1.jpg',
        cookTime: '30-35',
        origins: ['Italy','Greece']
    },
      {id: 2,
        price: 15,
        name: 'Paella with seafood',
        favorite: true,
        star: 5,
        tags: ['Paella', 'Seafood', 'Lunch', 'Hot'],
        imageUrl: 'assets/food2.jpg',
        cookTime: '45-50',
        origins: ['Spain']
    },
      {id: 3,
        price: 5,
        name: 'Omelette with cheese',
        favorite: true,
        star: 3,
        tags: ['Egg', 'Breakfast'],
        imageUrl: 'assets/food3.jpg',
        cookTime: '12-15',
        origins: ['United Kingdom', 'France']
    },
      {id: 4,
        price: 6.50,
        name: 'Vegetable Soup',
        favorite: false,
        star: 2,
        tags: ['Vegetable', 'Soup', 'Lunch', 'Dinner', 'Hot'],
        imageUrl: 'assets/food4.jpg',
        cookTime: '25-30',
        origins: ['France']
    },
      {id: 5,
      price: 8.5,
      name: 'Cheeseburger',
      favorite: true,
      star: 4,
      tags: ['Meat', 'Lunch'],
      imageUrl: 'assets/food5.jpg',
      cookTime: '20-25',
      origins: ['USA']
  },
      {id: 6,
      price: 15,
      name: 'Quesadilla',
      favorite: true,
      star: 5,
      tags: ['Meat', 'Lunch', 'Hot'],
      imageUrl: 'assets/food6.jpg',
      cookTime: '25-30',
      origins: ['Mexic']
    },
      {id: 7,
      price: 7,
      name: 'Pancake',
      favorite: false,
      star: 3,
      tags: ['Dessert', 'Breakfast'],
      imageUrl: 'assets/food7.jpg',
      cookTime: '15-20',
      origins: ['Southeast Europe']
    },
      {id: 8,
      price: 12,
      name: 'Pizza',
      favorite: true,
      star: 3,
      tags: ['Pizza', 'Lunch'],
      imageUrl: 'assets/food8.jpg',
      cookTime: '35-40',
      origins: ['Italy']
    },
      {id: 9,
      price: 2,
      name: 'Fried Chicken',
      favorite: false,
      star: 4,
      tags: ['Meat', 'Hot'],
      imageUrl: 'assets/food9.jpg',
      cookTime: '20-25',
      origins: ['USA', 'Egypt', 'Scotland']
    },
      {id: 10,
      price: 6,
      name: 'Pumpkin Pie',
      favorite: true,
      star: 5,
      tags: ['Cold', 'Dessert', 'Lunch', 'Dinner'],
      imageUrl: 'assets/food10.jpg',
      cookTime: '65-70',
      origins: ['USA', 'Canada', 'United Kingdom']
    },
      {id: 11,
        price: 7.75,
        name: 'Twice baked potatoes',
        favorite: false,
        star: 4,
        tags: ['Hot', 'Lunch'],
        imageUrl: 'assets/food11.jpg',
        cookTime: '90-95',
        origins: ['Great Britain']
    }]
  }

}

