import express from 'express';
import bodyParser from 'body-parser';
import { r, Connection } from 'rethinkdb-ts';
import connectDB from './database/db';
import 'dotenv/config'

const notValidatedHostname: string|undefined = process.env.HOSTNAME;
const notValidatedPort: string|undefined = process.env.PORT;

// Validate port retrieval by env

function validateEnvVariable(variable: string | undefined, variableName: string): string {
    if (variable === undefined) {
      console.error(`${variableName} is undefined.`);
      process.exit(1); 
      // Exit process with error code 1
    } return variable;
  }
  
  const validatedHostname: string = validateEnvVariable(notValidatedHostname, "HOSTNAME");
  const validatedPort    : string = validateEnvVariable(notValidatedPort, "PORT");
  
  if (isNaN(Number(validatedPort))) {
    console.error(`PORT is not a valid number: "${validatedPort}"`);
    process.exit(1);
    // Exit process with error code 1
  }
  

// Continue API Code

const app = express();
let conn: Connection;

// Middleware
app.use(bodyParser.json());

// Connect to RethinkDB
connectDB().then(connection => {
    if (connection === undefined)
        throw new Error("Connection not working, bacause is undefined.")
    conn = connection;
    app.listen(validatedPort, () => {
        console.log(`Server is running on http://${validatedHostname}:${validatedPort}`);
    });
}).catch(error => {
    console.error('Error connecting to RethinkDB:', error);
});

// Routs

app.get('/calculations', async (req, res) => {
    try {
        const cursor = await r.db('test').table('calculations').run(conn);
        const calculations = cursor//await cursor.toArray();
        res.json(calculations);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/calculations', async (req, res) => {
    try {
        const newCalculation = req.body;
        const result = await r.db('test').table('calculations').insert(newCalculation).run(conn);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/calculations/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCalculation = req.body;
        const result = await r.db('test').table('calculations').get(id).update(updatedCalculation).run(conn);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/calculations/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await r.db('test').table('calculations').get(id).delete().run(conn);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default app
