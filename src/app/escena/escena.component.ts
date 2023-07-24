import { Component,Input } from '@angular/core';
import {Frase} from '../home/home.component'


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  @Input() frases: Frase[] =[]

  indexFrase: number = 0

  anterior():void{
      
  if(this.indexFrase > 0)  {

    this.indexFrase--
  }
  }
  seguent():void{

  if(this.indexFrase < this.frases.length -1){
    this.indexFrase++
  }
  }



}
