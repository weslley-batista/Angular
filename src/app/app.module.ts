import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule //deve-se importa o forms (não vem por padrão)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
