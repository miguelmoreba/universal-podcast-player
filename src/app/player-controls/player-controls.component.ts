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
  @Output() playPauseClick = new EventEmitter();
  @Input() paused = true;


  ngOnInit(): void {
  }

  onPlayPause() {
    this.playPauseClick.emit();
  }

  onSliderChange() {
    this.sliderChanged.emit(this.current)
  }

}
