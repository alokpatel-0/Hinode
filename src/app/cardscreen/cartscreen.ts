export interface RootObject {
  l: L;
  parentId: string;
  productName: string;
  imageUrl: string[];
  price: any;
}

export interface Q {
  _id: string;
  productId: string;
  availablein: string;
  productprice: number;
  inStockNumber: number;
  discount: number;
}

export interface L {
  orderQuantity: number;
  id: string;
  q: Q;
}
