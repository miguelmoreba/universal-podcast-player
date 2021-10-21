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
  current = 0;
  paused = true;

  constructor(
    private readonly router: Router
  ) {

  }

  ngOnInit(): void {
    const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    player.currentTime = this.start;
  }

  timeUpdate(myEvent: any) {
    console.log(myEvent.target.currentTime);
    this.current = myEvent.target.currentTime;
  }

  timeUpdateThroughSlider(myEvent: any) {
    console.log(myEvent)
    const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    player.currentTime = myEvent;
  }

  onStartChange(myEvent: any) {
    const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    player.currentTime = myEvent.target.value
  }

  setDuration(myEvent: any) {
    this.duration = Math.round(myEvent.currentTarget.duration);
  }

  onPlayPause() {
    const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    if(player.paused) {
      player.play();
      this.paused = false;
    } else {
      player.pause();
      this.paused = true;
    }
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
