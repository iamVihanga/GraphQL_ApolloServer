const messagesResolvers = require("./messagesResolver");

module.exports = {
  Query: {
    ...messagesResolvers.Query,
  },
  Mutation: {
    ...messagesResolvers.Mutation,
  },
};
