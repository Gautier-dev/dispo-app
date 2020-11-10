import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'progress-bar',
    template: `
    <div *ngIf="ratio>=0.7" style="color: green">{{dispo}}/{{max}}</div>
    <div *ngIf="0.3<= ratio && ratio <0.7" style="color: orange">{{dispo}}/{{max}}</div>
    <div *ngIf="ratio<0.3" style="color: red">{{dispo}}/{{max}}</div>
    `,
    styleUrls: ['./app.component.css']
  })
  export class ProgressBar implements OnInit{
    @Input() dispo:number;
    @Input() max:number;
    ratio: number;
    ngOnInit(){
      //this just rounds up the ratio of dispo and max
      this.ratio = Math.ceil(this.dispo/this.max * 10) / 10
    }

  }