import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private REST_API_SERVER = "http://ec2-35-180-123-52.eu-west-3.compute.amazonaws.com:5000/";
  private REST_API_SERVER = "http://localhost:5000/";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(id){
    console.log('demande GET')
    return this.httpClient.get<JSON>(this.REST_API_SERVER+"?id="+id);
  }
  public sendGetDatapoints(id, laund_id, nombre){
    console.log('demande GET')
    return this.httpClient.get<JSON>(this.REST_API_SERVER+"/data/"
    +laund_id
    +"?id="
    +id+"&nombre="+nombre);
  }
}
