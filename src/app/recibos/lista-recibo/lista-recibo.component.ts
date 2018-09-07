import {Component, OnInit} from '@angular/core';
import { Receta } from '../receta.model';
import {RecetasService} from '../recetas.service';

@Component({
  selector: 'app-lista-recibo',
  templateUrl: './lista-recibo.component.html',
  styleUrls: ['./lista-recibo.component.css']
})
export class ListaReciboComponent implements OnInit {
  recetas: Receta[];

  constructor(private recetaService: RecetasService) {

  }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}
