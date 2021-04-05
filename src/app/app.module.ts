import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewComponent } from './review-list/review/review.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { BookCardComponent } from './book-card/book-card.component';
import { OrderTotalComponent } from './order-total/order-total.component';
import { OrderTotalDetailComponent } from './order-total-detail/order-total-detail.component';
import { AddInfoComponent } from './add-info/add-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewListComponent,
    ReviewComponent,
    NavbarComponent,
    CategoryComponent,
    CatalogueComponent,
    BookCardComponent,
    OrderTotalComponent,
    OrderTotalDetailComponent,
    AddInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
