import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductEditComponent } from "./products/product-edit/product-edit.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductResolver } from "./products/product-detail/product-resolver.service";
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonResolver } from './person/person-detail/person-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: "full"
  },
  {
    path: "product",
    children: [
      {
        path: "",
        component: ProductListComponent,
        pathMatch: "full"
      },
      {
        path: ":id",
        component: ProductDetailComponent,
        resolve: { product: ProductResolver },
        pathMatch: "full"
      },
      {
        path: ":id/edit",
        component: ProductEditComponent,
        pathMatch: "full",
        resolve: { product: ProductResolver },
      }
    ]
  },
  {
    path: "person",
    children: [
      {
        path: "",
        component: PersonListComponent,
        pathMatch: "full"
      },
      {
        path: ":id",
        component: PersonDetailComponent,
        resolve: { person: PersonResolver },
        pathMatch: "full"
      },
      {
        path: ":id/edit",
        component: PersonEditComponent,
        pathMatch: "full",
        resolve: { person: PersonResolver },
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/product',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
