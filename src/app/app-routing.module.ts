import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddInfoComponent} from './add-info/add-info.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {OrderReviewComponent} from './order-review/order-review.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: CatalogueComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'order-review', component: OrderReviewComponent},
  {path: 'add-info', component: AddInfoComponent},
  {path: 'product-detail', component: ProductDetailComponent},
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {}
