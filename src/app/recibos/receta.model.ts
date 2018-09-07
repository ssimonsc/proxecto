import {Ingrediente} from '../share/ingrediente.model';

export class Receta {
  public nome: string;
  public descripcion: string;
  public imaxe: string;
  public ingredientes: Ingrediente[];

  constructor(nome: string, desc: string, imaxe: string, ingredients: Ingrediente[]) {
    this.nome = nome;
    this.descripcion = desc;
    this.imaxe = imaxe;
    this.ingredientes = ingredients;
  }
}
