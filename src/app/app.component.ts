import { Component, OnInit } from '@angular/core';
import { ProgressBar } from './progressBar.component';
import {HttpClient} from '@angular/common/http' 
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public clientName: string;
  public clientStations: Station[];
  public database: any;
  private id=1;


  constructor(private dataService : DataService){}


  public getFromServer(){
    this.dataService.sendGetRequest(this.id).subscribe(data=>{
      this.database=data
      console.log(data);
      this.clientName = this.database["client"]
    this.clientStations = []
    for (let e of this.database["stations"]){
      this.clientStations.push(new Station(e["name"],e["adresse"],e["dispo"],e["max"],e["id"],e["geo_lat"],e["geo_lng"]))
    }
    })
    
  }
  


  async ngOnInit(){
    // example.json devrait être ce qui est renvoyé par le back
    await this.getFromServer()
    
}
}

export class Station {
  id:number;
  name: string;
  adresse: string;
  dispo: number;
  max: number;
  geo: Geotag;
  constructor(name: string, adresse: string,dispo: number, max: number,id:number,geo_lat:number,geo_lng:number) {
    this.name = name;
    this.adresse = adresse
    this.dispo = dispo;
    this.id = id;
    if(dispo>max){
      max = dispo;
    }
    this.max = max;
    this.geo = new Geotag(geo_lat,geo_lng);
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