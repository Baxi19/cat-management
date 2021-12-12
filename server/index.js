const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());


const whitelist = [
  'http://localhost:3000',
];
const corsOptions = {
  origin: function(origin, callback){
      const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send('Express Server Running!');
});

// Router
routerApi(app);

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
