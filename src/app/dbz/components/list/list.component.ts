import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Characters[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;

    this.onDeleteId.emit(id);
  }
}
