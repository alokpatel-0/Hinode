export interface ICategory {
  _id: string;
  category: string;
}

export interface IQuantity {
  availablein: string;
  discount: number;
  inStockNumber: number;
  productId: string;
  productprice: number;
  _id: string;
  productPriceWithDiscount?: number;
  categoryName?: string;
  orderQuantity?: number;
}

export interface IShopDetail {
  brandName: string;
  categoryName: string;
  populateCategoryName?: string;
  feedback: Array<any>;
  imageUrl: Array<string>;
  ingredients: string;
  keyFeatures: string;
  productName: string;
  quantitySet: Array<IQuantity>;
  rating: Array<any>;
  status: string;
  _id: string;
}
