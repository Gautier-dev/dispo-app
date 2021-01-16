import { Component, OnInit } from '@angular/core';
import {Station, Geotag, AppComponent} from '../app.component'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public clientName: string
  public clientStations: Station[]
  public lat = 45.7690096;
  public lng = 4.8357004;
  constructor() { }

  ngOnInit(): void {
    this.parseDatabase("../example.json")
  }
  public parseDatabase(path: string){
    //line below should be replaced with backend call
    
    const database = require(path)
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

}
