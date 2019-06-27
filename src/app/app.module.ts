import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { PersonComponent } from './person/person.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    PersonComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
