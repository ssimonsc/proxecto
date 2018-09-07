import {EventEmitter, Injectable} from '@angular/core';
import {Receta} from './receta.model';
import {Ingrediente} from '../share/ingrediente.model';
import {ListaCompraService} from '../lista-compra/lista-compra.service';

@Injectable()
export class RecetasService {
  recetaSelected = new EventEmitter<Receta>();

  private recetas: Receta[] = [
    new Receta('Hambureguesa Simons',
      'Exquisita hamburguesa - increíbel',
      'http://images.media-allrecipes.com/userphotos/960x960/3757723.jpg', [
        new Ingrediente('Carne', 20),
        new Ingrediente('Tomate', 5),
        new Ingrediente('Leituga', 3),
        new Ingrediente('Salsa Especial', 11),
      ]),
    new Receta('Spaghettis á Boloñesa',
      'Deliciosos spaghettis á boloñesa - una manxar',
      'https://i1.wp.com/www.kudoskitchenbyrenee.com/wp-content/uploads/' +
      '2016/01/french-spaghetti-finish-2.jpg?fit=750%2C499&ssl=1', [
        new Ingrediente('Carne', 20),
        new Ingrediente('Tomate', 5),
        new Ingrediente('Queixo', 4),
        new Ingrediente('Oregano', 2),
      ])
  ];

  constructor(private listaCompraService: ListaCompraService) {}


  getRecetas() {
    return this.recetas.slice();
  }

  engadirToListaCompra(ingredientes: Ingrediente[]) {
    this.listaCompraService.EngadirIngredientes(ingredientes);
  }
}
