import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";

const materialModule = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule
];

@NgModule({
  imports: materialModule,
  exports: materialModule
})
export class MatMaterialModule {}
