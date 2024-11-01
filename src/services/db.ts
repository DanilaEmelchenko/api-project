import mysql, { Connection } from "mysql2/promise";

export async function initDataBase(): Promise<Connection | null> {
  let connection: Connection | null = null;

  try {
    connection = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "editor",
      database: "productsapplication",
      password: "MY_SUPER_STRONG_PASSWORD_!#.",
    });
  } catch (e) {
    console.error((e as Error).message || e);
    return null;
  }

  console.log(`Connection to DB ProductsApplication established`);
  return connection;
}
