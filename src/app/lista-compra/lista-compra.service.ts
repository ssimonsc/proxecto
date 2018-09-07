import {EventEmitter, Injectable} from '@angular/core';
import {Ingrediente} from '../share/ingrediente.model';

@Injectable()
export class ListaCompraService {
  ingredientesChanged = new EventEmitter<Ingrediente[]>();

  private ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 10)
  ];

  getIngredientes() {
    return this.ingredientes.slice();
  }

  onEngadirIngrediente(meuIngrediente: Ingrediente) {
    this.ingredientes.push(meuIngrediente);
    this.ingredientesChanged.emit(this.ingredientes.slice());
  }

  EngadirIngredientes(meusIngredientes: Ingrediente[]) {
    // for (let ingrediente of meusIngredientes) {
    //   this.onEngadirIngrediente(ingrediente);
    // }
    this.ingredientes.push(...meusIngredientes);
    this.ingredientesChanged.emit(this.ingredientes.slice());
  }
}
