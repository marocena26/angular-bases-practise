import { Characters } from './../interfaces/characters.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public characters: Characters[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public onNewCharacter(character: Characters): void {
    this.characters.push(character);
  }

  public onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
