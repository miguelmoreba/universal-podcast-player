import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cutter',
  templateUrl: './cutter.component.html',
  styleUrls: ['./cutter.component.scss']
})
export class CutterComponent implements OnInit {

  @Input() duration = 0;
  currentLow = 0;
  currentHigh = 0;

  inputCurrentLow = 0;
  inputCurrentHigh = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeCurrentHigh(myEvent: any) {
    console.log(myEvent.target.value)
    const value = parseInt(myEvent.target.value) 
    if (value < this.currentLow + 3){
      const input = <HTMLInputElement>document.getElementById('end')
      input.value = String(this.currentHigh)
      this.inputCurrentHigh = this.currentHigh
      return;
    }
    this.currentHigh = value
  }

  onInputCurrentHigh(myEvent: any) {
    this.inputCurrentHigh = myEvent.target.value;
  }

  onChangeCurrentLow(myEvent: any) {
    console.log(myEvent.target.value)
    const value = parseInt(myEvent.target.value) 
    if (value > this.currentHigh - 3){
      const input = <HTMLInputElement>document.getElementById('start')
      input.value = String(this.currentLow)
      this.inputCurrentLow = this.currentLow
      return;
    }
    this.currentLow = value
  }

  onInputCurrentLow(myEvent: any) {
    this.inputCurrentLow = myEvent.target.value;
  }

}
