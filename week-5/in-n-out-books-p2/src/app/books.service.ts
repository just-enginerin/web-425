import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780060931414',
        title: 'Their Eyes Were Watching God',
        description: "Fair and long-legged, independent and articulate, Janie Crawford sets out to be her own person—no mean feat for a black woman in the '30s. Janie's quest for identity takes her through three marriages and into a journey back to her roots.",
        numOfPages: 219,
        authors: ['Zora Neale Hurston']
      },
      {
        isbn: '9780060916480',
        title: 'Mules and Men',
        description: `In the 1930's, Zora Neale Hurston returned to her "native village" of Eatonville, Florida to record the oral histories, sermons and songs, dating back to the time of slavery, which she remembered hearing as a child. With this collection, she has come to reveal'a and preserve'a beautiful and important part of American culture.`,
        numOfPages: 341,
        authors: ['Zora Neale Hurston']
      },
      {
        isbn: '9780060968854',
        title: 'Mule Bone',
        description: `Mule Bone is the only collaboration between Zora Neale Hurston and Langston Hughes, two stars of the Harlem Renaissance, and it holds an unparalleled place in the annals of African-American theater. Set in Eatonville, Florida--Hurston's hometown and the inspiration for much of her fiction--this energetic and often farcical play centers on Jim and Dave, a two-man song-and-dance team, and Daisy, the woman who comes between them.`,
        numOfPages: 282,
        authors: ['Zora Neale Hurston', 'Langston Hughes', 'George Houston Bass', 'Henry Louis Gates Jr.']
      },
      {
        isbn: '9780060916497',
        title: 'Tell My Horse: Voodoo and Life in Haiti and Jamaica',
        description: `Based on Zora Neale Hurston’s personal experience in Haiti and Jamaica, where she participated as an initiate rather than just an observer of voodoo practices during her visits in the 1930s, this travelogue into a dark world paints a vividly authentic picture of ceremonies and customs and superstitions of great cultural interest.`,
        numOfPages: 311,
        authors: ['Zora Neale Hurston']
      },
      {
        isbn: '9780060921705',
        title: `Barracoon: The Story of the Last "Black Cargo"`,
        description: `In 1927, Zora Neale Hurston went to Plateau, Alabama, just outside Mobile, to interview eighty-six-year-old Cudjo Lewis. Of the millions of men, women, and children transported from Africa to America as slaves, Cudjo was then the only person alive to tell the story of this integral part of the nation's history. Hurston was there to record Cudjo's firsthand account of the raid that led to his capture and bondage fifty years after the Atlantic slave trade was outlawed in the United States.`,
        numOfPages: 193,
        authors: ['Zora Neale Hurston']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
