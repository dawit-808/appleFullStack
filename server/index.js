const express = require("express");
const mysql = require("mysql2");
const port = 3000;
const app = express();
var cors = require("cors");
app.use(express.urlencoded({ extended: true }));
const db = mysql.createConnection({
  database: "mydb",
  host: "localhost",
  user: "myDBuser",
  password: "123456",
});

app.use(express.json());
app.use(cors());

db.connect((err) => {
  if (err) console.log(err.message);
  console.log("db connected");
});

app.get("/", (req, res) => {
  res.send("hello this is from mysql server");
});

app.get("/install", (req, res) => {
  const products = `CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_url VARCHAR(50),
    product_name VARCHAR(50)
  )`;

  const users = `CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50),
    user_password VARCHAR(50)
  )`;

  const descriptions = `CREATE TABLE IF NOT EXISTS descriptions (
    description_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    product_brief_description VARCHAR(255),
    product_description VARCHAR(255),
    product_img TEXT,
    product_link VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  )`;

  const price = `CREATE TABLE IF NOT EXISTS price (
    price_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    starting_price VARCHAR(50),
    price_range VARCHAR(50),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  )`;

  const orders = `CREATE TABLE IF NOT EXISTS orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    user_id INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
  )`;

  db.query(products, (err) => {
    if (err) return console.log("Products table error:", err.message);
    db.query(users, (err) => {
      if (err) return console.log("Users table error:", err.message);
      db.query(descriptions, (err) => {
        if (err) return console.log("Descriptions table error:", err.message);
        db.query(price, (err) => {
          if (err) return console.log("Price table error:", err.message);
          db.query(orders, (err) => {
            if (err) return console.log("Orders table error:", err.message);
            res.send("All tables created successfully.");
          });
        });
      });
    });
  });
});

app.post("/addProducts", (req, res) => {
  const {
    product_url,
    product_name,

    product_brief_description,
    product_description,
    product_img,
    product_link,

    starting_price,
    price_range,

    user_name,
    user_password,
  } = req.body;

  const insertProduct = `INSERT INTO products (product_url, product_name) VALUES (?, ?)`;
  const insertDescription = `INSERT INTO descriptions (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)`;
  const insertPrice = `INSERT INTO price (product_id, starting_price, price_range) VALUES (?, ?, ?)`;
  const insertUser = `INSERT INTO users (user_name, user_password) VALUES (?, ?)`;
  const insertOrder = `INSERT INTO orders (product_id, user_id) VALUES (?, ?)`;

  db.query(insertProduct, [product_url, product_name], (err, productResult) => {
    if (err) return res.send("Product insert error: " + err.message);
    const productId = productResult.insertId;

    db.query(
      insertDescription,
      [
        productId,
        product_brief_description,
        product_description,
        product_img,
        product_link,
      ],
      (err) => {
        if (err) return res.send("Description insert error: " + err.message);

        db.query(
          insertPrice,
          [productId, starting_price, price_range],
          (err) => {
            if (err) return res.send("Price insert error: " + err.message);

            db.query(
              insertUser,
              [user_name, user_password],
              (err, userResult) => {
                if (err) return res.send("User insert error: " + err.message);
                const userId = userResult.insertId;

                db.query(insertOrder, [productId, userId], (err) => {
                  if (err)
                    return res.send("Order insert error: " + err.message);
                  res.send("Data inserted successfully");
                });
              }
            );
          }
        );
      }
    );
  });
});

app.get("/iphones", (req, res) => {
  const query = `
    SELECT 
      p.product_id,
      p.product_name,
      p.product_url,
      d.product_brief_description,
      d.product_description,
      d.product_img,
      d.product_link,
      pr.starting_price,
      pr.price_range,
      u.user_name
    FROM products p
    JOIN descriptions d ON p.product_id = d.product_id
    JOIN price pr ON p.product_id = pr.product_id
    JOIN orders o ON p.product_id = o.product_id
    JOIN users u ON o.user_id = u.user_id
  `;

  db.query(query, (err, results) => {
    if (err) return console.log(err.message);
    res.json(results);
  });
});

app.get("/iphones/:id", (req, res) => {
  const productId = req.params.id;

  const query = `
    SELECT 
      p.product_id,
      p.product_name,
      p.product_url,
      d.product_brief_description,
      d.product_description,
      d.product_img,
      d.product_link,
      pr.starting_price,
      pr.price_range,
      u.user_name
    FROM products p
    JOIN descriptions d ON p.product_id = d.product_id
    JOIN price pr ON p.product_id = pr.product_id
    JOIN orders o ON p.product_id = o.product_id
    JOIN users u ON o.user_id = u.user_id
    WHERE p.product_id = ?
  `;

  db.query(query, [productId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ error: "Product not found" });
    res.json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
