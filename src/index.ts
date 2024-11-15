import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import dotenv from "dotenv"
import path from 'path';

dotenv.config({path:"./.env.local"})

const DATABASE_URL = process.env.POSTGRES_EXTERNAL_URL;
console.log(DATABASE_URL)

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Enable this if the server requires SSL
  },
});

const app = express();
app.use(express.json());

// Get all users
app.get('/users', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM "user"');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new user
app.post('/users', async (req: Request, res: Response) => {
  const { name, score } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO "user" (name, score) VALUES ($1, $2) RETURNING *',
      [name, score]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
