import { BookList } from './BookList';
import { AddBook } from './AddBook';
import { bookStore } from './bookshelf.store';
interface IBookshelfProps {
  name: string;
}

export const Bookshelf = (props: IBookshelfProps) => {
  const { books, setBooks, totalBooks } = bookStore();

  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} totalBooks={totalBooks()} />
      <AddBook setBooks={setBooks} />
    </div>
  );
};
