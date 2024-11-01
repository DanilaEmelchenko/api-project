import { RowDataPacket } from "mysql2/index";
import { IComment } from "../comments-api/types";

export interface IProduct {
  id: string;
  title: string;
  descriptions: string;
  price: number;
  comments?: IComment[];
}

export type ProductCreatePayload = Omit<IProduct, "id" | "comments">;

export interface IProductEntity extends IProduct, RowDataPacket {
  product_id: string;
}

export interface IProductSearchFilter {
  title?: string;
  descriptions?: string;
  priceFrom?: number;
  priceTo?: number;
}
