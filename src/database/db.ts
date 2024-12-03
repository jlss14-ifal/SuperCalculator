import { r } from 'rethinkdb-ts';

import 'dotenv/config'

const notValidatedHostname: string|undefined = process.env.DB_HOSTNAME;
const notValidatedPort: string|undefined = process.env.DB_PORT;

// Validate port retrieval by env

function validateEnvVariable(variable: string | undefined, variableName: string): string {
    if (variable === undefined) {
      console.error(`${variableName} is undefined.`);
      process.exit(1); 
      // Exit process with error code 1
    } return variable;
  }
  
  const validatedHostname: string = validateEnvVariable(notValidatedHostname, "DB_HOSTNAME");
  const validatedPort    : string = validateEnvVariable(notValidatedPort, "DB_PORT");
  
  if (isNaN(Number(validatedPort))) {
    console.error(`PORT is not a valid number: "${validatedPort}"`);
    process.exit(1);
    // Exit process with error code 1
  }
  


const connectDB = async () => {
    try {
        const connection = await r.connect({ host: validatedHostname, port: Number(validatedPort) });
        console.log('RethinkDB connected');
        return connection;
    } catch (error) {
        console.error('Error connecting to RethinkDB:', error);
        throw error
    }
};

export default connectDB;
