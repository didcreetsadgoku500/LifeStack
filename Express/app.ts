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

app.get('/api/getCostOfLiving', (req: Request, res: Response) => {
  const myResponse = {"key": "value", "key2": 2, "key3": [1,2,3]}

  res.json(myResponse)
})

app.get('/api/getConditions', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT condition from conditions');
    const conditions = result.rows.map((row: any) => row.condition);
    res.json(conditions);
  } catch (err) {
    console.error("Error");
    res.status(500).send('Server Error');
  }
});

app.get('/api/getOccupations', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT DISTINCT occupation FROM job_income');
    const occupations = result.rows.map((row: any) => row.occupation);
    res.json(occupations);
  } catch (err) {
    console.error("Error");
    res.status(500).send('Server Error');
  }
});

app.get('/api/getCounties', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT county_name from living_cost');
    const counties = result.rows.map((row: any) => row.county_name);
    res.json(counties);
  } catch (err) {
    console.error("Error");
    res.status(500).send('Server Error');
  }
});

app.get('/api/getPets', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT pet from pets');
    const pets = result.rows.map((row: any) => row.pet);
    res.json(pets);
  } catch (err) {
    console.error("Error");
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

