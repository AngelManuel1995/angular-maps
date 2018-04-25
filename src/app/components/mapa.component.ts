import { Component } from '@angular/core' 
import { Marker } from '../classes/marcador.class' 
@Component({
	selector:'app-mapa',
	templateUrl:'./mapa.component.html'
})

export class MapaComponent{

	markers:Marker[] = [] 

	lat:number = 6.750597 
	lng:number = -76.02611 
	zoom:number = 16 

	constructor(){
		let marcador = new Marker(6.750597,-76.02611) 
		this.markers.push(marcador) 
	}

	addMarker( event ){
		let coords:{lat:number, lng:number} = event.coords
		let marker = new Marker(coords.lat, coords.lng)
		this.markers.push(marker)
	}

}