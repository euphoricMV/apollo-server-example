import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
  type Post {
    title: String
    author: String
  }
  type Query {
    posts: [Post]
  }
`;


const posts = [
    {
        title: 'GraphQL Basics',
        author: 'John Doe',
    },
    {
        title: 'Apollo Server Deep Dive',
        author: 'Jane Smith',
    },
];


const resolvers = {
    Query: {
        posts: () => posts,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
