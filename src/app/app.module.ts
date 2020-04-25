import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { MatMaterialModule } from "./mat-material.module";
import { AppData } from "./app-data";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductEditComponent } from "./products/product-edit/product-edit.component";
import { ConfirmationDialogComponent } from "./utitlity/confirmation/confirmation.component";
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { HttpConfigInterceptor } from './services/http-config.interceptor';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonEditComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule.withConfig({}),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatMaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    InMemoryWebApiModule.forRoot(AppData, { passThruUnknownUrl: true, delay: 500 }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
