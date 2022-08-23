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
      {name: 'All', count: 6},
      {name: 'paste', count: 5},
      {name: 'paella', count: 1},
      {name: 'Lunch', count: 6}
    ];
  }
  getAll():Foods[]{
    return [
      {id: 1,
        price: 5.25,
        name: 'paste',
        favorite: false,
        star: 4,
        tags: ['paste', 'Lunch'],
        imageUrl: 'assets/food1.jpg',
        cookTime: '40-45',
        origins: ['Italy','Italy','Italy','Italy']
    },
      {id: 2,
        price: 5,
        name: 'paella',
        favorite: false,
        star: 5,
        tags: ['paste', 'Lunch'],
        imageUrl: 'assets/food2.jpg',
        cookTime: '40-45',
        origins: ['Spain']
    },
      {id: 3,
        price: 5,
        name: 'still paella',
        favorite: true,
        star: 3,
        tags: ['paste', 'Lunch'],
        imageUrl: 'assets/food2.jpg',
        cookTime: '40-45',
        origins: ['Spain']
    },
      {id: 4,
        price: 5,
        name: 'still paella',
        favorite: true,
        star: 3,
        tags: ['paste', 'Lunch'],
        imageUrl: 'assets/food2.jpg',
        cookTime: '40-45',
        origins: ['Spain']
    },
      {id: 5,
      price: 5.25,
      name: 'paste',
      favorite: false,
      star: 4,
      tags: ['paste', 'Lunch'],
      imageUrl: 'assets/food1.jpg',
      cookTime: '40-45',
      origins: ['Italy','Italy','Italy','Italy']
  }]
  }
  
}

