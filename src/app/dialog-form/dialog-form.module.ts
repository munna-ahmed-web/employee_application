import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogFormComponent } from './dialog-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogInputComponent } from './dialog-input/dialog-input.component';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [DialogFormComponent, DialogInputComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DialogFormComponent],
})
export class DialogFormModule {}
