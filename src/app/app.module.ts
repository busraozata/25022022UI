import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataWareHouseComponent } from './components/data-ware-house/data-ware-house.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { IgxCategoryChartModule } from "igniteui-angular-charts";

@NgModule({
  declarations: [
    AppComponent,
    DataWareHouseComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    IgxCategoryChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
