const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    myName: String!
    myAddress: String!
  }
`;

const resolvers = {
  Query: {
    myName: () => 'sam grimmer',
    myAddress: () => '85 marsdent st lower hutt',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server listening at : ${url}`));
