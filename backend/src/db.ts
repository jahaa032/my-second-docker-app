import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 
  process.env.DATABASE_URL || 
  'postgresql://pguser:notsecurepassword@pgsql:5432/pgdb'
  // user: process.env.DB_USER || 'postgres',
  // host: process.env.DB_HOST || 'db',
  // database: process.env.DB_NAME || 'my_second_docker_app',
  // password: process.env.DB_PASSWORD || 'password',
  // port: 5432,
});

export default pool;

