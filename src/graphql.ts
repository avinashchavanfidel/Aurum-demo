import express from 'express';
const app=express();
import { graphqlHTTP } from "express-graphql";
const port = 3000;
const schema = require('./schema/schema');
const auth = require('./middleware/auth');
import 'source-map-support/register'



exports.handler = () => {
    app.use(
        "/graphql",
        auth,
        graphqlHTTP({
          schema,
          graphiql: true
      }));
  }


