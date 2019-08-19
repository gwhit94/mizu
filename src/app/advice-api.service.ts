import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advice } from './advice.interface';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdviceAPIService {
  adviceUrl: string = "https://api.adviceslip.com/advice";

  constructor(private http: HttpClient) { }

  getAdvice(){
    return this.http.get<Advice>(this.adviceUrl, {observe: 'response'});
  }


}

