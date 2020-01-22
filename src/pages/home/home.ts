import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any = {} ;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.getData()

  }
  getData() {
    this.httpClient.get(
      'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=081590f558361a45c480b652d73fa102').subscribe(
      (data) => {console.log('data.json :', data)
      this.weather = data
    }, err=> console.log('err :', err)
    )
  }
}
