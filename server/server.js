import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './routes';

dotenv.config();

const { DB_URI } = process.env;

mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('DB Connected!'))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 6000;


// add other middlewares
app.use(cors());
app.use(compression()); // Compress all routes
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

// Implement the 'catch-all' errorHandler
app.use((err, req, res, next) => {
  console.log('err.stack :', err.stack);
  res.status(500);
  res.json({
    message: 'Hey!! we caught the error 👍👍',
    error: `${err}`,
    status: 'failure'
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;
