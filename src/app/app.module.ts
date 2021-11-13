import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {FormComponent} from './list/form/form.component';
import { EditFormComponent } from './list/edit-form/edit-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
