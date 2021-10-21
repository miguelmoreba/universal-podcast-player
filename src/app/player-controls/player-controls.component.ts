import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {

  constructor() { }

  @Input() duration = 2000;
  @Input() current = 0;
  @Output() sliderChanged = new EventEmitter();
  paused = true;

  ngOnInit(): void {
  }

  onPlayPause() {
    // const player = <HTMLAudioElement>this.audioPlayer.nativeElement;
    // player.paused ? player.play() : player.pause()
    this.paused = !this.paused
  }

  onSliderChange() {
    this.sliderChanged.emit(this.current)
  }

}
