import { DbzService } from '../services/dbz.service';
import { Characters } from './../interfaces/characters.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Characters[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Characters ):void {
    this.dbzService.addCharacter( character );
  }

}
