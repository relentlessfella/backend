let games = [
  { id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
  { id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox'] },
  { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '4', title: 'Mario Kart', platform: ['Switch'] },
  { id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '6', title: 'Minecraft', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '7', title: 'Terraria', platform: ['Switch', 'Xbox', 'PC'] },
  { id: '8', title: 'Brawl Stars', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '9', title: 'Clash Royale', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '10', title: 'Clash of Clans', platform: ['PS5', 'Xbox', 'PC'] },
];
let collections = [
  { id: '1', collection: 'collection 1', bookQuantity: 2, books: ['1', '2'] },
  { id: '2', collection: 'collection 2', bookQuantity: 3, books: ['3', '4', '5'] },
  { id: '3', collection: 'collection 3', bookQuantity: 2, books: ['6', '7'] },
  { id: '4', collection: 'collection 4', bookQuantity: 2, books: ['8', '9'] },
  { id: '5', collection: 'collection 5', bookQuantity: 2, books: ['10', '11'] },
  { id: '6', collection: 'collection 6', bookQuantity: 2, books: ['12', '13'] },
  { id: '7', collection: 'collection 7', bookQuantity: 2, books: ['14', '15'] },
];

let books = [
  {
    id: '1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'The Silent Guardian',
    collection_id: '1',
  },
  {
    id: '2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Enigma of Shadows',
    collection_id: '1',
  },
  {
    id: '3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Whispers in the Wind',
    collection_id: '2',
  },
  {
    id: '4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Echoes of Eternity',
    collection_id: '2',
  },
  {
    id: '5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'The Forgotten Key',
    collection_id: '2',
  },
  {
    id: '6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Serenade of Stars',
    collection_id: '3',
  },
  {
    id: '7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Midnight Mirage',
    collection_id: '3',
  },
  {
    id: '8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Chronicles of Crystal',
    collection_id: '4',
  },
  {
    id: '9',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'The Quantum Paradox',
    collection_id: '4',
  },
  {
    id: '10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Beyond the Horizon',
    collection_id: '5',
  },
  {
    id: '11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Veil of Illusions',
    collection_id: '5',
  },
  {
    id: '12',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Symphony of Secrets',
    collection_id: '6',
  },
  {
    id: '13',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Shattered Realms',
    collection_id: '6',
  },
  {
    id: '14',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Labyrinth of Dreams',
    collection_id: '7',
  },
  {
    id: '15',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Celestial Odyssey',
    collection_id: '7',
  },
];
let authors = [
  { id: '1', name: 'mario', verified: true },
  { id: '2', name: 'yoshi', verified: false },
  { id: '3', name: 'peach', verified: true },
];

let reviews = [
  { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2' },
  { id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1' },
  { id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3' },
  { id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4' },
  { id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5' },
  { id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2' },
  { id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1' },
];

// export default { games, authors, reviews };
export default { collections, books };
