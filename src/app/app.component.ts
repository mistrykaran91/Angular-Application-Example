import { Component, ViewChild, HostBinding } from "@angular/core";
import { SpinnerService } from "./services/spinner.service";
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from './interfaces/language.interface';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Theme } from './enums/theme.enum';
import { Direction } from './enums/direction.enum';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  title = "Angular-Application-Example";
  @ViewChild("sidenav", { static: false }) sidenav;
  @HostBinding('class') componentCssClass;
  loading$ = this.spinnerService.isLoading;
  languages = LANGUAGE;
  language = LANGUAGE[0].code;
  theme = Theme.LIGHT_THEME;
  Theme = Theme;
  Direction = Direction;
  direction = Direction.LTR;

  constructor(
    public spinnerService: SpinnerService,
    public overlayContainer: OverlayContainer,
    private translate: TranslateService,
    private router: Router) {
    translate.setDefaultLang(this.language);
    translate.use(this.language);
  }


  onLanguageChange() {
    this.translate.use(this.language);
    this.sidenav.close();
  }

  onThemeChange() {

    if (this.theme === Theme.DARK_THEME) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      this.componentCssClass = '';
    }
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
