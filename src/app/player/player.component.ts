import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Input() url = '';
  start= ''
  end = ''
  duration = 0;
  currentLow = 0;
  currentHigh = 0;
  constructor() { }

  timeUpdate(myEvent: any) {
    console.log(myEvent)
    if (myEvent.target.currentTime > this.currentHigh) {
      const player = <HTMLAudioElement>document.getElementById('audio-player');
      console.log(myEvent.target.value)
      player.pause()
    }
  }

  onStartChange(myEvent: any) {
    const player = <HTMLAudioElement>document.getElementById('audio-player');
    console.log(myEvent.target.value)
    player.currentTime = myEvent.target.value
  }

  onInputCurrentLow(myEvent: any) {
    console.log(myEvent.target.value)
    const value = parseInt(myEvent.target.value) 
    if (value > this.currentHigh - 3){
      const input = <HTMLInputElement>document.getElementById('start')
      input.value = String(this.currentLow)
      return;
    }
    this.currentLow = value
  }

  setDuration(myEvent: any) {
    this.duration = Math.round(myEvent.currentTarget.duration);
    this.currentHigh = this.duration
  }

  onInputCurrentHigh(myEvent: any) {
    console.log(myEvent.target.value)
    const value = parseInt(myEvent.target.value) 
    if (value < this.currentLow + 3){
      const input = <HTMLInputElement>document.getElementById('end')
      input.value = String(this.currentHigh)
      return;
    }
    this.currentHigh = value
  }
}
