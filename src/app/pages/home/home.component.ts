import { Component,Input,OnInit } from '@angular/core';
import { HomeInterface } from 'src/app/models/home-interface'; // agregamos esto .... para el itnerface

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //public info: HomeInterface // SERA tipo ANY , ucualquiera, numbrt, boolear,trsing ...


   @Input() public accion : HomeInterface = {
    section: "Accion",
    films: [{
             src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ve5elWGs42Zc1xZzU1VjrXVaAvU2gW0KTkkSAINl2w&s",
             alt: "Ejército de los muertos",
    },
    {
              src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ve5elWGs42Zc1xZzU1VjrXVaAvU2gW0KTkkSAINl2w&s",
              alt: "El protector",
    },
     {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ve5elWGs42Zc1xZzU1VjrXVaAvU2gW0KTkkSAINl2w&s",
      alt: "El protector",
     },
  ]
     }
  


constructor () {}

/*constructor () {
  this.info = { // llamo a la variable que está afuera "info" le meto this. Y CREAMOS NUESTRO OBJETO DE TIPO "ANY"
    title : " este es mi titulo",
     hero : {
          subtitulo : " este es el subtitulo",
          image : {
                 src:"assets/casi300.webp",
          }
     },
   
  }   

} */

ngOnInit(): void {}


 }
 
