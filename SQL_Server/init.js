// handling DB connection for tests
if(process.env.NODE_ENV === 'test'){
  connectionString = process.env.TEST_DATABASE_URL;
} else if(process.env.NODE_ENV !== 'test') {
  connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/bioBot';
}

module.exports = connectionString;