import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private oneSignal: OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      //################################################################################################################################################################################
      /* var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        console.log(jsonData);

        
      };

      var notificationReceivedCallback = jsonData => {
        console.log('notificationReceivedCallback: ' + JSON.stringify(jsonData));
        console.log(jsonData);
        let order = jsonData.payload.additionalData.orderId;
        let casino = jsonData.payload.additionalData.casinoId;
        console.log(order,casino);
        

      }

      var statusHandler = status => {
        console.log(status);
      }

      window["plugins"].OneSignal
        .startInit("2baa3300-3139-415f-aff6-183d9d2a688b", "15444032386")
        .handleNotificationOpened(notificationOpenedCallback)
        .handleNotificationReceived(notificationReceivedCallback)
        .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification) 
        .getPermissionSubscriptionState(statusHandler) // se maneja con then, no con subscribe, y no tiene argumentos, esta mal escrita la funcion
        .endInit();
        //displayOption OSInFocusDisplayOption Options are None, InAppAlert, and Notification */

        //################################################################################################################################################################################

        /* this.oneSignal.startInit('2baa3300-3139-415f-aff6-183d9d2a688b', '15444032386');

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
          
        }) */

        //################################################################################################################################################################################


    });
  }
}

