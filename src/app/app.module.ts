import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Mapas modulo
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCxxrOrikiWSUeJGjyM65PREGvZB0O4eIw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
