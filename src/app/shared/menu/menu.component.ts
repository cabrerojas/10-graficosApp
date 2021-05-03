import { Component } from '@angular/core';


interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItem: MenuItem[] = [
    {
      ruta: '/graficos/barra',
      texto: 'Barra'
    },
    {
      ruta: '/graficos/barras-dobles',
      texto: 'Barras Dobles'
    },
    {
      ruta: '/graficos/dona',
      texto: 'Dona'
    },
    {
      ruta: '/graficos/dona-http',
      texto: 'Dona Http'
    },
  ];

  constructor() { }


}
