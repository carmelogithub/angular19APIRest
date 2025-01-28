import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-consultarpractica',
  imports: [NgFor],
  standalone: true,
  templateUrl: './consultarpractica.component.html',
  styleUrl: './consultarpractica.component.css'
})
export class ConsultarpracticaComponent {
  productos: any[] = [];
  
  constructor(private servicio:DataService) { }
  ngOnInit():void {
    this.servicio.getPhotos().subscribe((data:any) => (this.productos = data.products));
    console.log(this.productos);
}//cierra ngOnInit
}//cierra clase
