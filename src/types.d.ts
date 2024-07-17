export interface IProduct {
  _id?: number;
  id_product?: number;
  count?: number;
  image: string;
  title: string;
  desc: string;
  price: string | number;
  type: string;
  rating?: number;
}

export namespace PRODUCT {
  type getReq = void;
  type postReq = {
    image: string;
    title: string;
    desc: string;
    price: string | number;
    type: string;
    rating?: number;
  };
  type deleteReq = number;
}
