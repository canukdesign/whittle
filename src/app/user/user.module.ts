import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoicesModule } from './choices/choices.module';
import { DashModule } from './dash/dash.module';
import { OffersModule } from './offers/offers.module';
import { PicksModule } from './picks/picks.module';
import { ProfileModule } from './profile/profile.module';
import { WhittleModule } from './whittle/whittle.module';

@NgModule({
  imports: [
    CommonModule,
    ChoicesModule,
    DashModule,
    OffersModule,
    PicksModule,
    ProfileModule,
    WhittleModule
  ],
  declarations: []
})
export class UserModule { }
