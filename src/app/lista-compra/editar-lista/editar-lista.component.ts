import {Component, OnInit} from '@angular/core';
import {Ingrediente} from '../../share/ingrediente.model';
import {ListaCompraService} from '../lista-compra.service';

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.css']
})
export class EditarListaComponent implements OnInit {

  constructor(private listaCompraService: ListaCompraService) { }

  ngOnInit() {
  }

  onEngadir(nome: string, precio: number) {
    const meuIngrediente = new Ingrediente(nome , precio);
    this.listaCompraService.onEngadirIngrediente(meuIngrediente);
  }

}
