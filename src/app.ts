import express from 'express';
const app=express();
import { graphqlHTTP } from "express-graphql";
const port = 4001;
const schema = require('./schema/schema');
const auth = require('./middleware/auth');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.use(auth);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port,  () => {
   console.log(`Express is listening at http://localhost:${port}`);
});
