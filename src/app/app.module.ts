import { CssplayComponent } from './cssplay/cssplay.component';
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
import { OverlayModule } from '@angular/cdk/overlay';
import { SpinComponent } from './cssplay/spin/spin.component';
import { HoverShadowComponent } from './cssplay/hover-shadow/hover-shadow.component';
import { ShapeComponent } from './cssplay/shape/shape.component';
import { FlipComponent } from './cssplay/flip/flip.component';
import { TypewriterComponent } from './cssplay/typewriter/typewriter.component';
import { MultipleTypewriterComponent } from './cssplay/multiple-typewriter/multiple-typewriter.component';
import { ShareEffectComponent } from './cssplay/share-effect/share-effect.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import { Screen6Component } from './screen6/screen6.component';
import { Screen7Component } from './screen7/screen7.component';


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
    ConfirmationDialogComponent,
    CssplayComponent,
    SpinComponent,
    HoverShadowComponent,
    ShapeComponent,
    FlipComponent,
    TypewriterComponent,
    MultipleTypewriterComponent,
    ShareEffectComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    Screen6Component,
    Screen7Component
  ],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OverlayModule,
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
