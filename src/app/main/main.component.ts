import { Component, OnInit } from '@angular/core';
import { AdviceAPIService } from '../advice-api.service';
import { Advice } from '../advice.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  adviceObj: Advice;
  advice: string;
  headers: string[];
  error: string;

  constructor(private adviceAPIService: AdviceAPIService) { }

  ngOnInit() {
  }
  getAdvice(){
    this.adviceAPIService.getAdvice().subscribe(data => {
      const keys = data.headers.keys();
      this.headers = keys.map(key => `${key}: ${data.headers.get(key)}`);
      
      this.adviceObj = data.body,
      this.advice = this.adviceObj.slip.advice,
      err => console.error(err),
      () => console.log('Done getting advice')
    });
  }

}
