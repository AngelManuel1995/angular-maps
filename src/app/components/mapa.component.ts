import { Component } from '@angular/core' 
import { Marker } from '../classes/marcador.class' 
import { MatSnackBar } from '@angular/material'
@Component({
	selector:'app-mapa',
	templateUrl:'./mapa.component.html'
})

export class MapaComponent{

	markers:Marker[] = [] 

	lat:number = 6.750597 
	lng:number = -76.02611 
	zoom:number = 16 

	constructor(private snackBar:MatSnackBar){
		let marker = new Marker(6.750597,-76.02611) 
		this.markers.push(marker) 
		this.getLocalStorageData()

	}

	addMarker( event ){
		let coords:{lat:number, lng:number} = event.coords
		let marker = new Marker(coords.lat, coords.lng)
		this.markers.push(marker)
		this.updateLocalStorageData()
		this.snackBar.open('Marcador agregado', 'Cerrar', {duration:1500})
	}

	updateLocalStorageData(){
		localStorage.setItem('markers', JSON.stringify(this.markers))
	}
	
	getLocalStorageData(){
		if(localStorage.getItem('markers')){
			return this.markers = JSON.parse(localStorage.getItem('markers'))
		}
		return console.log('No hay marcadores');
	}

	deleteMarker(i){
		this.markers.splice(i,1)
		this.updateLocalStorageData()
		this.snackBar.open('Marcador eliminado', 'Cerrar', {duration:1500})				
	}

}