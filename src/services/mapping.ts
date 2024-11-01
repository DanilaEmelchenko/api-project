import { IProductEntity, IProduct } from "../api/products-api/types";
import { IComment, ICommentEntity } from "../api/comments-api/types";

export const mapCommentEntity = ({
  comment_id,
  product_id,
  ...rest
}: ICommentEntity): IComment => {
  return {
    id: comment_id,
    productId: product_id,
    ...rest,
  };
};

export const mapCommentsEntity = (data: ICommentEntity[]): IComment[] => {
  return data.map(mapCommentEntity);
};

export const mapProductsEntity = (data: IProductEntity[]): IProduct[] => {
  return data.map(({ product_id, title, descriptions, price }) => ({
    id: product_id,
    title: title || "",
    descriptions: descriptions || "",
    price: Number(price) || 0,
  }));
};
