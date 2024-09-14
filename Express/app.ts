// src/index.js
import express, { Express, Request, Response } from "express";
const { Client } = require("pg");
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const connectionURL = process.env.DATABASE_URL;

const client = new Client(connectionURL);
client.connect()

app.get('/api/getCostOfLiving', (req, res) => {
  const myResponse = {"key": "value", "key2": 2, "key3": [1,2,3]}

  res.json(myResponse)
  // res.send('Hello World!')
})



app.get('/api/databaseTest', async (req, res) => {
  const results = await client.query(`
    SELECT table_name 
FROM information_schema.tables
WHERE table_schema = 'public';
    
    `);
  res.send(results.rows);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

