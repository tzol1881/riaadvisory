import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ArrayTableComponent } from './array-table/array-table.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputListComponent } from './input-list/input-list.component';
import { StringInputComponent } from './string-input/string-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { DateInputComponent } from './date-input/date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayTableComponent,
    InputListComponent,
    StringInputComponent,
    NumberInputComponent,
    DateInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
