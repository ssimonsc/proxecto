import { Component, OnInit } from '@angular/core';
import { Receta } from './receta.model';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css'],
  providers: [RecetasService]
})
export class RecibosComponent implements OnInit {
  recetaSelected: Receta;

  constructor(private recetaService: RecetasService) { }

  ngOnInit() {
    this.recetaService.recetaSelected.subscribe(
      (receta: Receta) => {
        this.recetaSelected = receta;
      });
  }


}
