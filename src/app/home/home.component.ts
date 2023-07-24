import { Component } from '@angular/core';

export interface Frase{
  item:string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

frases: Frase[] = [ 
  {item:"El nostre heroi estava surant per l'esapi sidera quan a llunyania va albirar una nau espacial" },
  {item:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes "},
  {item: "L'heroi va decidir travessar la porta que el portava a casa"},
  {item: "Mentrestant, altres herois no van tenir tanta sort en al seva elecció..."}
] 

confirmPass:boolean = true



outMainPage(){

  this.confirmPass= false
}

}
