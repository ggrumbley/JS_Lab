import { createSignal, Show } from 'solid-js';
import { BookList } from './BookList';
import { AddBook } from './AddBook';
import { SearchBooks } from './SearchBooks';
import { bookStore } from './bookshelf.store';
interface IBookshelfProps {
  name: string;
}

export const Bookshelf = (props: IBookshelfProps) => {
  const [showForm, setShowForm] = createSignal(false);
  const { books, setBooks, totalBooks } = bookStore();
  const toggleForm = () => setShowForm(!showForm());

  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} totalBooks={totalBooks()} />
      <Show
        when={showForm()}
        fallback={
          <>
            <h2>Search For Books</h2>
            <SearchBooks setBooks={setBooks} />
            <br />
            <button onClick={toggleForm}>Manually Add a book</button>
          </>
        }
      >
        <h2>Manually add a Book</h2>
        <AddBook setBooks={setBooks} />
        <br />
        <button onClick={toggleForm}>Search for Books</button>
      </Show>
    </div>
  );
};
