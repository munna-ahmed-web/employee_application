import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogFormModule } from './dialog-form/dialog-form.module';
import { HttpClientModule } from '@angular/common/http';
import { DataShowComponent } from './data-show/data-show.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [AppComponent, DataShowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogFormModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
