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
  public clientName: string
  public clientStations: Station[]
  public database: any
  private id=1


  constructor(private dataService : DataService){}

  public parseDatabase(){
    //line below should be replaced with backend call

    this.database = require("./example.json")
    this.clientName = this.database["client"]
    this.clientStations = []
    for (let e of this.database["stations"]){
      this.clientStations.push(new Station(e["name"],e["adresse"],e["dispo"],e["max"]))
    }
    
  }

  public getFromServer(){
    this.dataService.sendGetRequest(this.id).subscribe(data=>{
      console.log(data)
      this.database=data
      this.clientName = this.database["client"]
    this.clientStations = []
    for (let e of this.database["stations"]){
      this.clientStations.push(new Station(e["name"],e["adresse"],e["dispo"],e["max"]))
    }
    })
    
  }
  


  async ngOnInit(){
    // example.json devrait être ce qui est renvoyé par le back
    await this.getFromServer()
    
}
}

export class Station {
  name: string;
  adresse: string;
  dispo: number;
  max: number;
  constructor(name: string, adresse: string,dispo: number, max: number) {
    this.name = name;
    this.adresse = adresse
    this.dispo = dispo;
    if(dispo>max){
      max = dispo;
    }
    this.max = max;
  }
}