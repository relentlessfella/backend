export const typeDefs = `#graphql
type Collection {
    id: ID!
    title: String!
    books: [Book!]!
    bookQuantity: Int!
}

type Book {
  id: ID!
  description: String!
  title: String!
  collection_id: ID
}


# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each.
type Query {
  getCollections: [Collection!]!
  bookCollection(id: ID!): Collection
  books(id: ID!): [Book!]!
  book(id: ID!): Book
  func(name: String): String
}
type Mutation {
  addBookToCollection(collection_id: ID!, book: AddBookInput!): Book
  addCollection(collection: AddCollectionInput!): Collection
  deleteBook(id: ID!): Book
}

input AddBookInput {
  title: String!
  description: String!
}

input AddCollectionInput {
  title: String!
}
`;
