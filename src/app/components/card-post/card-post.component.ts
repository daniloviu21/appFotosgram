import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone: false,
})
export class CardPostComponent  implements OnInit {
  //Header
  @Input() username: string = '';
  @Input() location: string = '';
  @Input() createAt: string = '';
  @Input() avatarUrl: string = '';
  //Content
  @Input() contentUrl: string = '';
  //Stats
  @Input() liked: boolean = false;
  @Input() saved: boolean = false;

  @Input() likes: number = 0;
  @Input() description: string = '';

  constructor() { }

  ngOnInit() {}

  selectheart(){
    this.liked = !this.liked;
    if(this.liked){
      this.likes++;
    } else {
      this.likes--;
    }
  }

  selectbook(){
    this.saved = !this.saved;
  }

}
