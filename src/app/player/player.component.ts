import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() url = '';
  @Input() originalUrl = '';
  @Input() start = 0;
  @ViewChild('audio_player') audioPlayer: any;
  duration = 0;
  currentHigh = 0;

  constructor(
    private readonly router: Router
  ) {

  }

  ngOnInit(): void {
    const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    player.currentTime = this.start;
  }

  timeUpdate(myEvent: any) {
    // if (myEvent.target.currentTime > this.currentHigh) {
    //   const player = <HTMLAudioElement>document.getElementById('audio-player');
    //   player.pause()
    // }
  }

  onStartChange(myEvent: any) {
    const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    player.currentTime = myEvent.target.value
  }

  setDuration(myEvent: any) {
    this.duration = Math.round(myEvent.currentTarget.duration);
    this.currentHigh = this.duration
  }

  onPlayPause() {
    const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    player.paused ? player.play() : player.pause()
  }

  onShare() {
    const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([], {
      queryParams:
      {
        url: this.originalUrl,
        start: player.currentTime
      }
    });
  }
}
