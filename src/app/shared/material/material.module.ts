import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

const materialComponents = [MatButtonModule, MatTableModule,MatSnackBarModule];

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ]
})
export class MaterialModule {}
