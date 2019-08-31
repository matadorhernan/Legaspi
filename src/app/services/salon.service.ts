import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  constructor() {}

  public halls = [
    {
      img: '/assets/places/marriott.jpg',
      name: 'Hotel Marriott',
      desc: 'Hotel 5 estrellas, un hotel moderno y localizado al norte de Altaria.'
    },
    {
      img: '/assets/places/quintareal.bmp',
      name: 'Hotel Quinta Real',
      desc: 'Hotel 5 estrellas, el hotel sobresale por su estilo rustico y elegante.'
    },
    {
      img: '/assets/places/alameda.jpg',
      name: 'Gran Hotel Alameda',
      desc: 'Hotel 5 estrellas, el hotel tiene un estilo clasico y lujoso.'
    },
    {
      img: '/assets/places/tequimilpa.bmp',
      name: 'Quinta Tequimilpa',
      desc: 'Con iluminación arquitectónica de led y laser con colores programables para complementar el evento a tu elección.'
    },
    {
      img: '/assets/places/puerta.jpg',
      name: 'Puerta del Sol',
      desc: 'Con iluminación arquitectónica de led y laser con colores programables para complementar el evento a tu elección.'
    },
    {
        img: '/assets/places/olimpo.png',
        name: 'Monte Olimpo',
        desc: 'Salon de eventos moderno y con gran iluminacion, cuenta con pista de baile'
    },
    {
        img: '/assets/places/solyluna.png',
        name: 'Salon Sol y Luna',
        desc: 'Salon de eventos rustico, con jardin y estacionamiento.'
    },
    {
      img: '/assets/places/fresnos.bmp',
      name: 'Los Fresnos y Aguas Termales (Valladolid)',
      desc: 'Quinta campestre, ideal para fiestas regulares, cuenta con piscina de aguas termales.'
    },
    {
      img: '/assets/places/fatima.png',
      name: 'Salon Jardin Fatima',
      desc: 'Salon de fiestas, ideal para fiestas grandes.'
    },
    {
      img: '/assets/places/regina.png',
      name: 'Salon Regina',
      desc: 'Salon de fiestas, ideal para fiestas infantiles o pequeñas.'
    },
    {
      img: '/assets/places/partyhall.png',
      name: 'Party Hall University',
      desc: 'Salon de fiestas, ideal para fiestas infantiles medianas.'
    },
  ];
}
