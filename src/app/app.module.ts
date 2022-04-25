import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent , TestComponent
  ],
  imports: [
    FlexLayoutModule,
    MatSortModule,
    FormsModule,
    BrowserModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  exports:[
    MatSortModule,
    MatFormFieldModule,
    MatInputModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
