import { createSignal } from 'solid-js';

export type Book = {
  title: string;
  author: string;
};

export const bookStore = () => {
  const INITIAL_BOOKS: Book[] = [
    { title: 'Code Complete', author: 'Steve McConnell' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  ];

  const [books, setBooks] = createSignal(INITIAL_BOOKS);

  // Derived State
  const totalBooks = () => books().length;

  return {
    books,
    setBooks,
    totalBooks,
  };
};
