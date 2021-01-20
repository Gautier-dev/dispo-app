import { Component, OnInit } from '@angular/core';
import {Station, Geotag} from '../app.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public clientName: string
  public clientStations: Station[]
  public lat = 45.7690096;
  public lng = 4.8357004;
  private id=1;
  public database: any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    console.log("list triggered")
    this.getFromServer()
  }
  public getFromServer(){
    this.dataService.sendGetRequest(this.id).subscribe(data=>{
      this.database=data
      this.clientName = this.database["client"]
      console.log(data);
      this.clientStations = []
      for (let e of this.database["stations"]){
        console.log("NOM",e["geo_lat"]);
        this.clientStations.push(new Station(e["name"],e["adresse"],e["dispo"],e["max"],e["id"],e["geo_lat"],e["geo_lng"]))
      }
    })
    console.log(this.clientStations);
    
  }
}


