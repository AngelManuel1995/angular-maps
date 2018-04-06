import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Mapas modulo
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

//Services
import { MapsService } from './services/maps.service';


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
  providers: [
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
