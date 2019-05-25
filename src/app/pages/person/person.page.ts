import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, PopoverController, } from '@ionic/angular';
import { NotificationsComponent } from './../../components/notifications/notifications.component';


@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {
  }

  async contratar(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
