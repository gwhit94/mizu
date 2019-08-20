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
  gongAudio = <HTMLMediaElement> document.querySelector("#gongAudio");

  ngOnInit() {
    // auto plays background loop
    // This requires the user to allow autoplay in order to function
    // BG audio loop could also be extended past the current 1 minute it is, but this requires larger load and not necessary in Proof of Concept
     function playBG(){
      let audioBG = new Audio();
      audioBG.src = "../../../assets/deerscare.mp3";
      audioBG.load();
      audioBG.play();
      audioBG.loop = true;
    }
    playBG();
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
    this.playGong();
  }

  playGong(){
    let gongAudio = new Audio();
    gongAudio.src = "../../../assets/gongaudio.wav";
    gongAudio.load();
    gongAudio.play();
  }
}
