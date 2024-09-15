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

const cors = require('cors')
app.use(cors());

app.get('/api/getCostOfLiving', (req: Request, res: Response) => {
  const myResponse = {"key": "value", "key2": 2, "key3": [1,2,3]}

  res.json(myResponse)
});

app.get('/api/getConditions', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT condition, cost from conditions');
    const conditions = result.rows.map((row: any) => ({condition: row.condition, cost: row.cost}));
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
    const result = await client.query('SELECT DISTINCT county_name from living_cost');
    const counties = result.rows.map((row: any) => row.county_name);
    res.json(counties);
  } catch (err) {
    console.error("Error");
    res.status(500).send('Server Error');
  }
});

app.get('/api/getLocations', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT DISTINCT county_name, us_state from living_cost');
    const counties = result.rows.map((row: any) => [row.county_name, row.us_state]);
    res.json(counties);
  } catch (err) {
    console.error("Error");
    res.status(500).send('Server Error');
  }
});

app.get('/api/getPets', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT pet, cost from pets');
    const pets = result.rows.map((row: any) => ({pet: row.pet, cost: row.cost}));
    res.json(pets);
  } catch (err) {
    console.error("Error");
    res.status(500).send('Server Error');
  }
});

app.get('/api/getSalaryByJobAndLocation', async (req: Request, res: Response) => {
  const { us_state, occupation } = req.query;

  if (!us_state || !occupation) {
    return res.status(400).json({error: 'Location or occupation not provided'});
  }

  try {
    const query = 'SELECT median_income FROM job_income WHERE us_state = $1 AND occupation = $2';
    const result = await client.query(query, [us_state, occupation]);

    if (result.rows.length > 0) {
      const income = result.rows[0].median_income;
      res.json({income});
    }
    else {
      res.status(404).json({message: "Not found"});
    }
  }
  catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Server Error');
  }
});

app.get('/api/getCostForPet', async (req: Request, res: Response) => {
  const { pet } = req.query;

  if (!pet) {
    return res.status(400).json({error: 'Pet not provided'});
  }

  try {
    const query = 'SELECT cost FROM pets WHERE pet = $1';
    const result = await client.query(query, [pet]);

    if (result.rows.length > 0) {
      const cost = result.rows[0].cost;
      res.json({cost});
    }
    else {
      res.status(404).json({message: "Not found"});
    }
  }
  catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Server Error');
  }
});

app.get('/api/getCostForCondition', async (req: Request, res: Response) => {
  const { condition } = req.query;

  if (!condition) {
    return res.status(400).json({error: 'Condition not provided'});
  }

  try {
    const query = 'SELECT cost FROM conditions WHERE condition = $1';
    const result = await client.query(query, [condition]);

    if (result.rows.length > 0) {
      const cost = result.rows[0].cost;
      res.json({cost});
    }
    else {
      res.status(404).json({message: "Not found"});
    }
  }
  catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Server Error');
  }
});

app.get('/api/getCostByCountyAndFamily', async (req: Request, res: Response) => {
  const { county, family_size, us_state } = req.query;

  if (!county || !family_size) {
    return res.status(400).json({error: 'County or family size not provided'});
  }

  try {
    const query = 'SELECT * FROM living_cost WHERE county_name = $1 AND family_size = $2 AND us_state = $3';
    const result = await client.query(query, [county, family_size, us_state]);

    if (result.rows.length > 0) {
      const living_cost = result.rows[0];
      res.json(living_cost);
    }
    else {
      res.status(404).json({message: "Not found"});
    }
  }
  catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

