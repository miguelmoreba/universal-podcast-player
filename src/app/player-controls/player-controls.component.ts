import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {

  constructor() { }

  duration = 2000;
  paused = true

  ngOnInit(): void {
  }

  onPlayPause() {
    // const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    // player.paused ? player.play() : player.pause()
    this.paused = !this.paused
  }

}
