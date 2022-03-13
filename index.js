const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const MONGO_DB = process.env.MONGO_DB_CONNECTION_URI;
const port = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Database Connected...!");
    return server.listen({ port });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
