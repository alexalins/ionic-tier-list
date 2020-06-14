import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ListModule } from 'src/app/components/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    HeaderModule,
    ListModule
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
