import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../models/books.model';

const GOOGLE_BOOKS_API =
  'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(GOOGLE_BOOKS_API)
      .pipe(map((books) => books.items || []));
  }
}
