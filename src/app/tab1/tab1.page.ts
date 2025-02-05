import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  post = [
    { 
      username: 'Daniel', 
      description: 'Hola, hoy me comí un pambazo y un agua de café y estaban ricos', 
      createAt: '10:30', 
      location: 'UTCV A2 LC3', 
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg', 
      contentUrl: 'https://ionicframework.com/docs/img/demos/card-media.png', 
      likes: 562 
    },
    { 
      username: 'Mariana', 
      description: 'Disfrutando una tarde lluviosa con un buen café ☕️', 
      createAt: '16:45', 
      location: 'Cafetería Central', 
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg', 
      contentUrl: 'https://ionicframework.com/docs/img/demos/card-media.png', 
      likes: 874 
    },
    { 
      username: 'Luis', 
      description: 'Hoy tocó hamburguesa doble con papas 🍔🍟', 
      createAt: '19:20', 
      location: 'Parque Principal', 
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg', 
      contentUrl: 'https://ionicframework.com/docs/img/demos/card-media.png', 
      likes: 453 
    },
    { 
      username: 'Fernanda', 
      description: 'Mañana de ejercicio y un desayuno saludable 💪🍉', 
      createAt: '07:10', 
      location: 'Gimnasio VitalFit', 
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg', 
      contentUrl: 'https://ionicframework.com/docs/img/demos/card-media.png', 
      likes: 1023 
    },
    { 
      username: 'Carlos', 
      description: 'Iniciando un nuevo proyecto en Angular 🚀', 
      createAt: '14:30', 
      location: 'Oficina DevTech', 
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg', 
      contentUrl: 'https://ionicframework.com/docs/img/demos/card-media.png', 
      likes: 680 
    },
    { 
      username: 'Andrea', 
      description: 'Atardecer increíble en la playa 🌅', 
      createAt: '18:50', 
      location: 'Playa del Carmen', 
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg', 
      contentUrl: 'https://ionicframework.com/docs/img/demos/card-media.png', 
      likes: 912 
    }
  ];
  


  constructor() {}

}
