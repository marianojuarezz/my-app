import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NuevoComponent } from '../nuevo/nuevo.component';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  item = {
    id:0,
    nombre : "",
    apellido : "",
    gmail : "",
  };

data = [
  {
    id:1,
    nombre : "Jorgito",
    apellido : "Lavandeira",
    gmail : "jorgitolav@gmail.com",
  },
  {
    id:2,
    nombre : "Alberto",
    apellido : "De Las Nieves",
    gmail : "adelasnow123@gmail.com",
  },
  {
    id:3,
    nombre : "Lilo",
    apellido : "Y Stitch",
    gmail : "liloystitchvpi@gmail.com",
  }
]
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  abrimeElModal(item: any){
const crearCliente = this.modalService.open(NuevoComponent, {size:'lg'})
  crearCliente.componentInstance.item = item
  crearCliente.componentInstance.titulo = item.id === 0 ? 'Crear' : 'Editar';
  }

}
