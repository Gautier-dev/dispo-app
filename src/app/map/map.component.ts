import { Component, OnInit } from '@angular/core';
import {Station, Geotag, AppComponent} from '../app.component';
import { DataService } from '../data.service';

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
  private id=1;
  public database: any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    console.log("map triggered");
    this.getFromServer();
  }
  
  public getFromServer(){
    this.dataService.sendGetRequest(this.id).subscribe(data=>{
      this.database=data;
      this.clientName = this.database["client"];
      console.log("request",data);
      this.clientStations = [];
      for (let e of this.database["stations"]){
        this.clientStations.push(new Station(e["name"],e["adresse"],e["dispo"],e["max"],e["id"],e["geo_lat"],e["geo_lng"]))
      }
      console.log("ts object",this.clientStations);
    })
  }
  


}
