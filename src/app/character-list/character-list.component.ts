import { Component } from '@angular/core';
import { CharacterApiServicesService } from '../character-api-services.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})




export class CharacterListComponent {
characterLiastData:any;
  constructor(private api:CharacterApiServicesService){
    this.getCharacterList();
  }

  getCharacterList(){
    this.api.getAllCharacter().subscribe((res:any)=>{
          console.log(res);
          this.characterLiastData = res.results;
    })
  }
}
