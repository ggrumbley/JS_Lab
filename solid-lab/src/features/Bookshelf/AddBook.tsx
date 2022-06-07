import { JSX, Setter, createSignal } from 'solid-js';

import { Book } from './bookshelf.store';

const EMPTY_BOOK: Book = { title: '', author: '' };

interface IAddBookProps {
  setBooks: Setter<Book[]>;
}

export const AddBook = (props: IAddBookProps) => {
  const [newBook, setNewBook] = createSignal(EMPTY_BOOK);

  const addBook: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
    e.preventDefault();

    props.setBooks((draft) => [...draft, newBook()]);

    setNewBook(EMPTY_BOOK);
  };

  return (
    <form>
      <div>
        <label for="title">Book name</label>
        <input
          id="title"
          value={newBook().title}
          onInput={(e) => {
            setNewBook({ ...newBook(), title: e.currentTarget.value });
          }}
        />
      </div>
      <div>
        <label for="author">Author</label>
        <input
          id="author"
          value={newBook().author}
          onInput={(e) => {
            setNewBook({ ...newBook(), author: e.currentTarget.value });
          }}
        />
      </div>
      <button type="submit" onClick={addBook}>
        Add book
      </button>
    </form>
  );
};
