import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  public initflag = false;

  constructor(public http: HttpClient,private oneSignal: OneSignal) {
    console.log('Hello NotificationsProvider Provider');
  }

  oneSignalInit(){

    if (!this.initflag){
        this.oneSignal.startInit('2baa3300-3139-415f-aff6-183d9d2a688b', '15444032386');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

        this.oneSignal.handleNotificationReceived().subscribe((jsonData) => {
            // do something when notification is received
            console.log('notificationReceivedCallback: ' + JSON.stringify(jsonData));
            console.log(jsonData);
        });

        this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
          // do something when a notification is opened
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          console.log(jsonData);
        });

        

        this.oneSignal.endInit();

        this.oneSignal.getPermissionSubscriptionState().then(status =>{
          console.log(status);
          
        })

        this.oneSignal.getIds().then( idObj =>{
          console.log(idObj);
          
        })

        this.initflag = true;
      }
  }

}
