require('dotenv').config();


const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();
app.use(cors());
app.use(express.json());
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/courses", async (req, res) => {
  const result = await pool.query("SELECT * FROM courses");
  res.json(result.rows);
});
app.post("/add-course", async (req, res) => {
  const { title, form_link, sheet_link } = req.body;
await pool.query(
  "INSERT INTO courses (title, form_link, sheet_link) VALUES ($1, $2, $3)",
  [title, form_link, sheet_link]
);
  res.send("Course added");
});
app.get("/responses/:id", async (req, res) => {
  const id = req.params.id;
  const result = await pool.query(
    "SELECT sheet_link FROM courses WHERE id=$1",
    [id]
  );
  const sheetLink = result.rows[0].sheet_link;
  if (!sheetLink) {
    return res.send("No sheet link added for this course yet.");
  }
  const fetch = (await import("node-fetch")).default;
  const response = await fetch(sheetLink);
  const text = await response.text();
  res.send(text);
});
app.listen(5000, () => console.log("Server running on 5000"));
