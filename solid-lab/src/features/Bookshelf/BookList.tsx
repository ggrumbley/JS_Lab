import { For } from 'solid-js';
import { Book } from './bookshelf.store';

interface IBookListProps {
  books: Book[];
  totalBooks: number;
}

export const BookList = (props: IBookListProps) => (
  <>
    <h2>My books ({props.totalBooks})</h2>
    <ul>
      <For each={props.books}>
        {(book: Book) => (
          <li>
            {`${book.title} `}
            <span style={{ 'font-style': 'italic' }}>({book.author})</span>
          </li>
        )}
      </For>
    </ul>
  </>
);
