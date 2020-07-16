const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
// Router files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// body parser
app.use(express.json());

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(logger);
// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.get('/', (req, res) => {
  res.send('Hello from express');
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`App running in ${process.env.NODE_ENV} node on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
