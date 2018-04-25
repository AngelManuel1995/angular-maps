import { BrowserModule } from '@angular/platform-browser'  
import { NgModule } from '@angular/core'  

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'  
import { MaterialModule } from './material.module'  

//Mapas modulo
import { AgmCoreModule } from '@agm/core'  
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'  
import { MapaComponent } from './components/mapa.component'  
import { MapaEditarComponent } from './components/mapa-editar.component'


//Services
import { MapsService } from './services/maps.service'  


@NgModule({
  entryComponents:[
    MapaEditarComponent //Para indicar que puede ser inyetado
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
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
