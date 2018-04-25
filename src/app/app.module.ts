import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

//Mapas modulo
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa.component';


//Services
import { MapsService } from './services/maps.service';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
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
