import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {Station, Geotag} from '../app.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private dataService : DataService){}
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true
  };
  public clientName: string;
  public clientStations: Station[];
  public database: any;
  private id=1;
  public availableGraphs: GraphType[] = [];
  public barChartLabels: Label[] = ['Aout 2020', 'Septembre 2020', 'Octobre 2020', 'Novembre 2020', 'Decembre 2020', 'Janvier 2021', 'Fevrier 2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public selectedOption: any;
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Laverie A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Laverie B' }
  ];

  ngOnInit(): void {
    this.getFromServer()
    if (this.clientStations.length >0) {
      this.selectedOption = this.clientStations[0];
    }
    
  }
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
  public onChangeGraphType(event){
    console.log("selected option", this.selectedOption);
  }
  public getDataPoints(){
    this.dataService.sendGetRequest(this.id).subscribe(data=>{
      this.database=data;
      console.log(data);
      this.clientName = this.database["client"]
    this.clientStations = []
    for (let e of this.database["stations"]){
      this.clientStations.push(new Station(e["name"],e["adresse"],e["dispo"],e["max"],e["id"],e["geo_lat"],e["geo_lng"]))
    }
    })
    
  }
  

}

export class GraphType {
  name: string;
  optionCode: string;
  needsDate: boolean;
  constructor(name: string, optionCode: string, needsDate: boolean){
    this.name = name;
    this.optionCode = optionCode;
    this.needsDate = needsDate;
  }
}
