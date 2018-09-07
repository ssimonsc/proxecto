import { Component, OnInit } from '@angular/core';
import {Ingrediente} from '../share/ingrediente.model';
import {ListaCompraService} from './lista-compra.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css'],
  providers: [ListaCompraService]
})
export class ListaCompraComponent implements OnInit {

  ingredientes: Ingrediente[] = [];

  constructor(private listaCompraService: ListaCompraService) { }

  ngOnInit() {
    this.ingredientes = this.listaCompraService.getIngredientes();
    this.listaCompraService.ingredientesChanged.subscribe(
      (ingredientes: Ingrediente[]) => {
        this.ingredientes = ingredientes;
      });
  }


}
