import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-tenda',
  templateUrl: './tenda.component.html',
  styleUrls: ['./tenda.component.css']
})
export class TendaComponent{
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
