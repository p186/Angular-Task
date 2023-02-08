import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterApiServicesService } from '../character-api-services.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit{

  constructor(private api:CharacterApiServicesService,private route:ActivatedRoute){}

  data:any;
  ngOnInit(): void {
   
    this.route.params.subscribe(urldata=>{
      var id=urldata['character_id'];
      this.api.getCharacterDetails(id).subscribe((res:any)=>{
        this.data = res;
        console.log(res);
      });
    })

  }
  
}
