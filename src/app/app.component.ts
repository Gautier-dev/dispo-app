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
  public parseDatabase(path: string){
    //line below should be replaced with backend call
    
    const database = require('./example.json')
    this.clientName = database["client"]
    this.clientStations = []
    for (let e of database["stations"]){
      this.clientStations.push(new Station(e["name"],e["adresse"],e["dispo"],e["max"]))
    }
    
  }
  public ngOnInit(){
    // example.json devrait être ce qui est renvoyé par le back
    this.parseDatabase("./example.json")
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