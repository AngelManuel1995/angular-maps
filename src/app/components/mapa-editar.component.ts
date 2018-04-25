import { Component, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material' 
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
	selector:'app-mapa-editar',
	templateUrl:'./mapa-editar.component.html'
})

export class MapaEditarComponent{
		
	forma:FormGroup 

	constructor( private _formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
			// data : información que enviamos desde el mapa.component
			this.forma = _formBuilder.group({
				'title':data.title,
				'desc':data.desc
			})
		}
	saveChanges(){
		this.dialogRef.close(this.forma.value) 
	}

	onNoClick(): void {
		this.dialogRef.close() 
	}
}