import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lat: number = 6.750597;
  lng: number = -76.02611;
  zoom:number = 16;

  ejemplo(evento){
    console.log(evento)
  }
}
