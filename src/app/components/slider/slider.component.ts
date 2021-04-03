import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  peliculas: any[] = [
    {
      name: 'foto1',
      img: 'assets/images/sliders/carro0001.jpg',
      desc: 'aqui va la descripcion'
    },
    {
      name: 'foto2',
      img: 'assets/images/sliders/carro002.jpg',
      desc: 'aqui va la descripcion2'
    },
    {
      name: 'foto3',
      img: 'assets/images/sliders/carro003.jpg',
      desc: 'aqui va la descripcion2'
    },
    {
      name: 'foto4',
      img: 'assets/images/sliders/carro004.jpg',
      desc: 'aqui va la descripcion2'
    }
  ];

  constructor(private _config: NgbCarouselConfig) {
    //tiempo de cambio de imagen
    _config.interval = 1000;
    //para que el slider se detenga cuando lo señalo con el maus 
    _config.pauseOnHover = true;
    //para que no aparescan las flechas
    _config.showNavigationArrows = false;
  }
  ngOnInit(): void {

  }

}
