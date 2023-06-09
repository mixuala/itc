import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwiperModule } from 'swiper/angular';

import { ComponentsModule } from '../../components/components.module';

import { FashionService } from '../fashion.service';
import { FashionDetailsPage } from './fashion-details.page';
import { FashionDetailsResolver } from './fashion-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: FashionDetailsPage,
    resolve: {
      data: FashionDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    SwiperModule
  ],
  declarations: [
    FashionDetailsPage
  ],
  providers: [
    FashionDetailsResolver,
    FashionService
  ]
})
export class FashionDetailsPageModule {}
