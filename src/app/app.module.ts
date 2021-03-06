import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AddInfoComponent} from './add-info/add-info.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookCardComponent} from './book-card/book-card.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {CategoryComponent} from './category/category.component';
import {CheckoutDetailsComponent} from './checkout-details/checkout-details.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {OrderDetailItemComponent} from './order-detail-item/order-detail-item.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrderReviewComponent} from './order-review/order-review.component';
import {OrderTotalDetailComponent} from './order-total-detail/order-total-detail.component';
import {OrderTotalComponent} from './order-total/order-total.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ReviewListComponent} from './review-list/review-list.component';
import {ReviewComponent} from './review-list/review/review.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {SignupComponent} from './signup/signup.component';

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
              AddInfoComponent,
              ShoppingCartComponent,
              OrderDetailComponent,
              OrderReviewComponent,
              OrderDetailItemComponent,
              CheckoutDetailsComponent,
              ProductDetailComponent,
              LoginComponent,
              SignupComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {}
