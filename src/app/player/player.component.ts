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
  start= ''
  end = ''
  duration = 0;
  currentHigh = 0;
  @ViewChild('audio_player') audioPlayer: any;

  constructor(
    private readonly router: Router
  ){

  }
  ngOnInit(): void {
    const player = <HTMLAudioElement>document.getElementById('audio-player');
    player.controls = false;
  }

  timeUpdate(myEvent: any) {
    // if (myEvent.target.currentTime > this.currentHigh) {
    //   const player = <HTMLAudioElement>document.getElementById('audio-player');
    //   player.pause()
    // }
  }

  onStartChange(myEvent: any) {
    const player = <HTMLAudioElement>document.getElementById('audio-player');
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

  onShare(){
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([], {queryParams:
      {
        url: this.originalUrl,
        start: 5,
        end: 20
      }
    });
  }
}
