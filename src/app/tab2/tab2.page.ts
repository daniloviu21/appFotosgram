import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  items=[
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
    {imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'},
  ]

  constructor() {}

}
