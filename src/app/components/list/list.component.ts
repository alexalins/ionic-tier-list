import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Tier } from 'src/app/model/Tier';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  tierList: any;

  constructor(
    private api: ApiService,
    private alertController: AlertController  
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.api.getTierList().subscribe(
      res => {
        this.tierList = res;
      }
    );
  }

  async presentAlert(dado: Tier) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: dado.user + " - " + dado.rank,
      message: dado.tier,
      buttons: ['OK']
    });

    await alert.present();
  }

}
