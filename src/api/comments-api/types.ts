import { RowDataPacket } from "mysql2/index";

export interface IComment {
  productId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

export type CommentCreatePayload = Omit<IComment, "id">;

export type CommentValidator = (comment: CommentCreatePayload) => string | null;

export interface ICommentEntity extends RowDataPacket {
  comment_id: string;
  name: string;
  email: string;
  body: string;
  product_id: string;
}
