export const typeDefs = `#graphql
type Collection {
    id: ID!
    collection: String!
    books: [Book!]!
    bookQuantity: Int!
}

type Book {
  id: ID!
  description: String!
  title: String!
  collection_id: ID!
}

type Query {
  bookCollections: [Collection!]!
  books: [Book!]!
  bookCollection(id: ID!): Collection
  book(id: ID!): Book
}
type Mutation {
  addBookToCollection(collectionId: ID!, book: AddBookInput!): Book
  addCollection(collection: AddCollectionInput!): Collection
}

input AddBookInput {
  title: String!
  description: String
}

input AddCollectionInput {
  collection: String!
}
`;
