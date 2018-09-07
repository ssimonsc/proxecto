import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../../receta.model';
import {RecetasService} from '../../recetas.service';

@Component({
  selector: 'app-recibo-item',
  templateUrl: './recibo-item.component.html',
  styleUrls: ['./recibo-item.component.css']
})
export class ReciboItemComponent implements OnInit {
  @Input() receta: Receta;

  constructor(private recetaService: RecetasService) { }

  ngOnInit() {
  }

  onItemSelected() {
    this.recetaService.recetaSelected.emit(this.receta);
  }

}
