import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';
import { CardExploreComponent } from './card-explore/card-explore.component';



@NgModule({
  declarations: [
    LayoutComponent,
    CardPostComponent,
    CardExploreComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    LayoutComponent,
    CardPostComponent,
    CardExploreComponent
  ]
})
export class ComponentsModule { }
