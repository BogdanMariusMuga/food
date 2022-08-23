import { CartItem } from "./CartItem";

export class Cart{
  items:CartItem[] = [];

  get totalPrice(): Number{
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}
