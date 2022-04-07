import db from "./createSchemas.js";

//TABLE: users
db.query(
  `CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(50),
    email VARCHAR(50),
    username VARCHAR(20),
    password VARCHAR(255)
  );`
);

//TABLE: wines
db.query(`CREATE TABLE IF NOT EXISTS wine (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prod_img_ref VARCHAR(255),
  title VARCHAR(50),
  origin VARCHAR(50),
  grape_variety VARCHAR(50),
  rating DOUBLE,
  ratings INT,
  origin_img_ref VARCHAR(255),
  price INT,
  price_pr_box INT,
  wine_type VARCHAR(50),
  type VARCHAR(50),
  producer VARCHAR(50),
  year_of_prod INT
  );`);

db.end();
