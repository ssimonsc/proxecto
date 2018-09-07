import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TendaComponent } from './tenda/tenda.component';
import { RecibosComponent } from './recibos/recibos.component';
import { ListaReciboComponent } from './recibos/lista-recibo/lista-recibo.component';
import { ReciboItemComponent } from './recibos/lista-recibo/recibo-item/recibo-item.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { EditarListaComponent } from './lista-compra/editar-lista/editar-lista.component';
import { DetallesReciboComponent } from './recibos/detalles-recibo/detalles-recibo.component';
import { DropdownDirective } from './share/dropdown.directive';
import {ListaCompraService} from './lista-compra/lista-compra.service';


@NgModule({
  declarations: [
    AppComponent,
    TendaComponent,
    RecibosComponent,
    ListaReciboComponent,
    ReciboItemComponent,
    ListaCompraComponent,
    EditarListaComponent,
    DetallesReciboComponent,
    DropdownDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ListaCompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
