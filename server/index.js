const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed'));
    }
  }
}

app.get('/', (req, res) => {
  res.send('Express Server Running!');
});

// Router
routerApi(app);

// Cors
app.use(cors(options));

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
