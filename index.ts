import { Express } from "express";
import { Connection } from "mysql2/promise";
import { initDataBase } from "./src/services/db";
import { initServer } from "./src/services/server";
import { commentsRouter } from "./src/api/comments-api/comments-api";
import { productsRouter } from "./src/api/products-api/products-api";

// async function runServer() {
//   const connection = await initDataBase();
//   if (!connection) {
//     console.error("Failed to connect to the database.");
//     return;
//   }
//   const [rows] = await connection.execute<[any]>("SELECT * FROM products");
//   console.log(rows.length);
//   console.log(rows[0]);
// }

// runServer();

export let server: Express;
export let connection: Connection | null = null;

const ROOT_PATH = "/api";

async function launchApplication() {
  server = initServer();
  connection = await initDataBase();

  initRouter();
}

function initRouter() {
  server.use(`${ROOT_PATH}/comments`, commentsRouter);
  server.use(`${ROOT_PATH}/products`, productsRouter);
}

launchApplication();
