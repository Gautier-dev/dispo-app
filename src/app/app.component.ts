declare const google: any;
import { Component, OnInit } from '@angular/core';
import { ProgressBar } from './progressBar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public clientName: string
  public clientStations: Station[]
  public displayType = 'map';
  public lat = 45.7690096;
  public lng = 4.8357004;

  public ngOnInit(){
    // example.json devrait être ce qui est renvoyé par le back
    this.parseDatabase("./example.json")
  }
  public parseDatabase(path: string){
    //line below should be replaced with backend call
    
    const database = require('./example.json')
    this.clientName = database["client"]
    this.clientStations = []
    for (let e of database["stations"]){
      let geo = new Geotag(e["geo"]["lat"],e["geo"]["lng"]);
      console.log("lat", e["geo"]["lat"],"lng",e["geo"]["lng"]);
      const stat = new Station(e["name"],e["adresse"],e["dispo"],e["max"],geo);
      this.clientStations.push(stat);
      console.log("lat", stat.geo.latitude,"lng",e["geo"]["lng"]);
    }
    this.lat = this.clientStations[0].geo.latitude;
    this.lng = this.clientStations[0].geo.longitude;
  }
  public displayAsMap(){
    console.log("display as map");
    this.displayType = 'map';
  }
  public displayAsList(){
    this.displayType = 'list';
  }
}

export class Station {
  name: string;
  adresse: string;
  dispo: number;
  max: number;
  geo: Geotag;
  constructor(name: string, adresse: string,dispo: number, max: number,geo: Geotag) {
    this.name = name;
    this.adresse = adresse
    this.dispo = dispo;
    this.geo = geo;
    if(dispo>max){
      max = dispo;
    }
    this.max = max;
  }
}
export class Geotag {
  longitude: number;
  latitude: number;
  constructor( latitude: number, longitude: number){
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
