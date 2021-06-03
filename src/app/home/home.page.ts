import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";

import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  data: any;
  constructor(private http: HttpClient, public configservice : ConfigService, public platform: Platform) {
   this.getData();
   //alert(1);
  }
  
  ngAfterViewInit() {
		this.platform.ready().then(() => this.loadMap());
	}

  getData(){
    this.configservice.getData()
    .then( reading => {
      //alert(reading);
      this.data= reading;
      console.log(reading[0]['vibration_reading']);
    });
 
     }
     

     loadMap() {const map = GoogleMaps.create('map');
     map.one( GoogleMapsEvent.MAP_READY ).then((data: any) => {
			const coordinates: LatLng = new LatLng(41, -87);

			map.setCameraTarget(coordinates);
			map.setCameraZoom(2);
     })
    }
}