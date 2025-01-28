import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-consultar',
  imports: [NgFor],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {

  posts: any[] = [];
  constructor(private servicio:DataService) { }

  ngOnInit():void {
    this.servicio.getPosts().subscribe((data) => (this.posts = data));
    console.log(this.posts);
  }//cierra ngOnInit
}//cierra clase
