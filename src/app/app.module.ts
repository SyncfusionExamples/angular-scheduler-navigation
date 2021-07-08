import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

@NgModule({
  //declaration of ej2-angular-schedule module into NgModule
  imports: [BrowserModule, ScheduleModule, DatePickerAllModule, DropDownListAllModule, ButtonAllModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
