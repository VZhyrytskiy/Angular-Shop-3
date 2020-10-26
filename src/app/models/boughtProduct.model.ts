import { ProductModel } from './product.model';

export class BoughtProductModel {
  constructor(
    public product: ProductModel,
    public quantity: number
  ) {}

  // constructor(product: ProductModel, quantity: number) {
  //       this.product = product;
  //       this.quantity = quantity;
  //   }

  //   product: ProductModel;
  //   quantity: number;
}
