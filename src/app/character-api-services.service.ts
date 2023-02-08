import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharacterApiServicesService {

  baseurl=" https://rickandmortyapi.com/api";

  constructor(private http:HttpClient) { }

  getAllCharacter(){
    return this.http.get(this.baseurl+"/character");
  }

  getCharacterDetails(character_id:any){
    return this.http.get((this.baseurl+"/character/" + character_id));
  }
}
