/*
  Title: app-routing.module.ts
  Author: Erin Brady
  Date: 1 July 2023
  Description: App Routing Module
*/

// Import Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Components
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// Define routes
const routes: Routes = [
  {path: '', component: BookListComponent },
  {path: 'book-list', component: BookListComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutComponent },
  {path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
