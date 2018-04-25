export class Marker{
	
	private lat:number;
	private lng:number;
	private title:string = 'Sin título';
	private desc = 'Sin descripción';
	
	constructor(lat:number, lng:number){
		this.lat = lat;
		this.lng = lng;
	}
}