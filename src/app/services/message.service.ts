import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor(
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {}

  showMessage(message: string, isTranslatable: boolean = true): void {
    const translatedMessage = isTranslatable
      ? this.translateService.instant(message)
      : message;
    this.snackBar.open(translatedMessage, null, { duration: 2000 });
  }
}
