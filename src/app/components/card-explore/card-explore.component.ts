import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-explore',
  templateUrl: './card-explore.component.html',
  styleUrls: ['./card-explore.component.scss'],
  standalone: false,
})
export class CardExploreComponent  implements OnInit {

  @Input() imgUrl: string = '';
  @Input() likes: number = 0;
  @Input() comments: number = 0;
  @Input() liked: boolean = false;
  @Input() comment: boolean = false;

  constructor() { }

  ngOnInit() {}

  hovername(){
    this.liked = !this.liked;
    this.comment = !this.comment;
  }

  hovername2(){
    this.liked = !this.liked;
    this.comment = !this.comment;
  }
}
