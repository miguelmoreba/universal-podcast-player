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
  current = 0;

  constructor() { }

  timeUpdate(myEvent: any) {
    console.log(myEvent)
    if (myEvent.target.currentTime > 3) {
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

  onInputChange(myEvent: any) {
    this.current = myEvent.target.value
  }

  setDuration(myEvent: any) {
    this.duration = Math.round(myEvent.currentTarget.duration);
  }
}
