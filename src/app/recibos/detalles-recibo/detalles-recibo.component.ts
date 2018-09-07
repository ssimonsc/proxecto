import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../receta.model';
import {RecetasService} from '../recetas.service';

@Component({
  selector: 'app-detalles-recibo',
  templateUrl: './detalles-recibo.component.html',
  styleUrls: ['./detalles-recibo.component.css']
})
export class DetallesReciboComponent implements OnInit {
  @Input() recetaSel: Receta;

  constructor(private recetasService: RecetasService) { }

  ngOnInit() {
  }

  EngadirToListaCompra() {
    this.recetasService.engadirToListaCompra(this.recetaSel.ingredientes);
  }
}
