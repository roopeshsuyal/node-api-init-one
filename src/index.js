import 'dotenv/config';
import cors from 'cors';
import nocache from 'nocache';
import express from 'express';
import routes from './routes';
import models from './models';

const app = express();

app.use(nocache());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    // do something
    //req.me = users[1];
    req.context = {
        models,
        me: models.users[1],
      };
    next();
  });

app.use('/', routes.home);
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);