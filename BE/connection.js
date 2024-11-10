require('dotenv').config();
const { Client } = require('pg');


const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});


const createTableQuery = `
CREATE TABLE contactus (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const checkTableExistsQuery = `
SELECT EXISTS (
  SELECT FROM information_schema.tables 
  WHERE table_schema = 'public' 
  AND table_name = 'contactus'
);
`;


client.connect()
  .then(() => {
    console.log('Connected to database');
    return client.query(checkTableExistsQuery);
  })
  .then(result => {
    if (!result.rows[0].exists) {
      return client.query(createTableQuery);
    } 
  })
  .then(() => {
    console.log('Table contactus created successfully');
  })
  .catch(err => {
    console.error('Error executing query', err.stack);
  })
  .finally(() => {
    client.end();
  });