import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';
import { typeDefs } from './schema.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    async getCollections() {
      return await prisma.collection.findMany({
        orderBy: { id: 'asc' },
      });
    },
    async bookCollection(_, args, context) {
      return await prisma.collection.findUnique({
        where: {
          id: parseInt(args.id),
        },
        include: {
          Book: {
            select: {
              id: true,
              collection_id: true,
              title: true,
              description: true,
            },
          },
        },
      });
    },
    async books(_, args) {
      try {
        const books = await prisma.book.findMany({
          where: {
            collection_id: parseInt(args.id),
          },
          select: {
            id: true,
            title: true,
            description: true,
            collection_id: true, // Include collection_id in the selection
          },
        });
        return books; // Ensure that 'books' is not null
      } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Failed to fetch books'); // or handle the error in an appropriate way
      }
    },
    book(_, args) {
      return db.books.find((book) => book.id === args.id);
    },
    func(parent, args, context, info) {
      console.log(args.name);
      console.log(info);
      return args.name;
    },
  },
  Collection: {
    books(parent) {
      return db.books.filter((book) => book.collection_id === parent.id);
    },
    async bookQuantity(parent) {
      const booksCount = await prisma.book.count({
        where: {
          collection_id: parent.id,
        },
      });
      return booksCount;
    },
  },
  Mutation: {
    async addBookToCollection(_, { collection_id, book }) {
      if (!book || !book.description || book.title.trim() === '') {
        throw new Error('All fields are required');
      }
      const addBook = await prisma.book.create({
        data: {
          title: book.title,
          description: book.description,
          collection_id: parseInt(collection_id),
        },
      });
      return console.log('Adding Book: ', addBook);
    },

    addCollection: async (_, { collection }) => {
      if (!collection || !collection.title || collection.title.trim() === '') {
        throw new Error('Collection title is required');
      }
      console.log(db.collections.length);
      const response = await prisma.collection.create({
        data: { title: collection.title },
      });
      console.log('New Collection:', collection);

      return response;
    },
    deleteBook: async (_, { id }) => {
      const deleteBook = await prisma.book.delete({
        where: {
          id: parseInt(id),
        },
      });
      return console.log(id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    prisma: new PrismaClient(),
  }),
});

console.log('Server ready at port', 4000);
