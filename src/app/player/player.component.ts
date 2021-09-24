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


}
