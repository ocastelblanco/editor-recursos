import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SplitterModule } from 'primeng/splitter';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DialogModule,
    AutoCompleteModule,
    SplitterModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    AutoCompleteModule,
    SplitterModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
  ],
})
export class PrimengModule { }
