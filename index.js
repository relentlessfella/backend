import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';
//types
import { typeDefs } from './schema.js';

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    authors() {
      return db.authors;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id);

      return db.games;
    },
    addGame(_, args) {
      const maxId = Math.max(...db.games.map((game) => parseInt(game.id))) || 0;
      // let game = {
      //   ...args.game,
      //   id: Math.floor(Math.random() * 10000).toString(),
      // };
      // const reviews = args.game.reviews;
      let game = {
        ...args.game,
        id: (maxId + 1).toString(),
        reviews: args.game.reviews.map((review, index) => ({
          id: (maxId + 1).toString() + index.toString(),
          ...review,
        })),
      };
      db.games.push(game);

      console.log('New game added:', game);

      return game;
    },
    updateGame(_, args) {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.edits };
        }

        return g;
      });

      return db.games.find((g) => g.id === args.id);
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
