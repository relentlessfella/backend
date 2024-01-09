import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';
//types
import { typeDefs } from './schema.js';

const resolvers = {
  Query: {
    bookCollections() {
      return db.collections;
    },
    bookCollection(_, args) {
      return db.collections.find((collection) => collection.id === args.id);
    },
    books() {
      return db.books;
    },
    book(_, args) {
      return db.books.find((book) => book.id === args.id);
    },
  },
  //   Book: {
  //     reviews(parent) {
  //       return db.reviews.filter((r) => r.game_id === parent.id);
  //     },
  //   },
  Collection: {
    books(parent) {
      return db.books.filter((book) => book.collection_id === parent.id);
    },
    bookQuantity(parent) {
      return parent.books.length;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log('Server ready at port', 4000);
