import { Component, ViewChild } from "@angular/core";
import { SpinnerService } from "./services/spinner.service";
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from './interfaces/language.interface';
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  title = "Angular-Application-Example";
  @ViewChild("sidenav", { static: false }) sidenav;
  loading$ = this.spinnerService.isLoading;
  languages = LANGUAGE;
  language = LANGUAGE[0].code;

  constructor(public spinnerService: SpinnerService,
    private translate: TranslateService,
    private router: Router) {
    translate.setDefaultLang(this.language);
    translate.use(this.language);
  }


  onLanguageChange() {
    this.translate.use(this.language);
    this.sidenav.close();
  }

  onAddProduct() {
    this.router.navigate(["0/edit"]);
    this.sidenav.close();
  }

  onListProduct() {
    this.router.navigate([""]);
    this.sidenav.close();
  }

  onListPerson() {
    this.router.navigate(["person"]);
    this.sidenav.close();
  }
}
