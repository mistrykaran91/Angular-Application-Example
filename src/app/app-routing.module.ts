import { Screen3Component } from './screen3/screen3.component';
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
import { CssplayComponent } from './cssplay/cssplay.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen4Component } from './screen4/screen4.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cssplay',
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
    path: "cssplay",
    component: Screen4Component
  },
  {
    path: '**',
    redirectTo: '/cssplay',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
