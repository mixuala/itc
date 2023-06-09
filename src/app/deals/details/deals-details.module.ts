import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwiperModule } from 'swiper/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { DealsService } from '../deals.service';
import { DealsDetailsPage } from './deals-details.page';
import { DealsDetailsResolver } from './deals-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: DealsDetailsPage,
    resolve: {
      data: DealsDetailsResolver
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
    PipesModule,
    SwiperModule
  ],
  declarations: [
    DealsDetailsPage
  ],
  providers: [
    DealsDetailsResolver,
    DealsService
  ]
})
export class DealsDetailsPageModule {}
