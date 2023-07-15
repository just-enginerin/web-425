/**
 * Title: book.interface.ts
 * Author: Erin Brady
 * Date: 24 June 2023
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}
