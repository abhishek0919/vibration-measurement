import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError,retry, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators'

export enum SearchType {
  all = '',
  vibrations = 'Vibration'
}
export class Vibration {
  vibration: string;
  coordinates: string;
 }
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl = 'http://127.0.0.1:8000/api/v1/vibrations/?format=json';

  constructor(private http:HttpClient) {} 
  
  getData() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'').subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        //alert(err);
        console.log(err);
      });
    });
  }
  }