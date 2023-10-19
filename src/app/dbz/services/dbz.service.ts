import { Injectable } from '@angular/core';
import { Characters } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Characters[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public addCharacter(character: Characters): void {
    const newCharacter: Characters = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  public onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
