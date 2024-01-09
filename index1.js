import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';
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
  Collection: {
    books(parent) {
      return db.books.filter((book) => book.collection_id === parent.id);
    },
    bookQuantity(parent) {
      return parent.books.length;
    },
  },
  Mutation: {
    addBookToCollection: (_, { collectionId, book }) => {
      const collection = db.collections.find((c) => c.id === collectionId);

      if (!collection) {
        throw new Error(`Collection with ID ${collectionId} not found`);
      }

      const newBook = {
        id: String(db.books.length + 1),
        ...book,
        collection_id: collectionId,
      };

      collection.books.push(newBook);

      db.books.push(newBook);

      return newBook;
    },

    addCollection: (_, { collection }) => {
      if (!collection || !collection.collection || collection.collection.trim() === '') {
        throw new Error('Collection title is required');
      }
      console.log(db.collections.length);
      const newCollection = {
        id: String(db.collections.length + 1),
        ...collection,
        bookQuantity: 0,
        books: [],
      };
      console.log('New Collection:', newCollection);

      db.collections.push(newCollection);

      return newCollection;
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
