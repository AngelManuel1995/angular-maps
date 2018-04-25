import { Component } from '@angular/core';

@Component({
    selector:'app-mapa',
    templateUrl:'./mapa.component.html'
})

export class MapaComponent{

    lat: number = 6.750597;
    lng: number = -76.02611;
    zoom:number = 16;

    constructor(){

    }

}