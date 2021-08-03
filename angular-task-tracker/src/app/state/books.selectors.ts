import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Book } from '../models/books.model';

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Book[]) => books,
);

export const selectCollectionState = createFeatureSelector<AppState, ReadonlyArray<string>>(
  'collection',
);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Book[], collection: string[]) => {
    return collection.map((id) => books.find((book) => book.id === id));
  },
);
