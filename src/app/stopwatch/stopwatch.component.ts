import { Component } from '@angular/core';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})

export class StopwatchComponent {
  private timer: number = 0;
  private isRunning: boolean = false; 
  private timerId: NodeJS.Timeout;
  private readonly MILLISECONDS_IN_MIN: number = 60000
  buttonText: string = TimerButtonText.START;
  TimerButtonText: typeof TimerButtonText = TimerButtonText;
  minutes: string | number = '00';
  seconds: string | number  = '00';
  milliseconds: string | number = '00';

  onClickTimer(): void {
    if (this.isRunning) {
      this.buttonText = TimerButtonText.START;
      clearInterval(this.timerId);
      this.isRunning = false;
      return;
    }
    const startTime = Date.now() - (this.timer || 0);
    this.timerId = setInterval(() => {
      this.timer = Date.now() - startTime;
      this.buttonText = TimerButtonText.STOP;
      this.isRunning = true;
      this.minutes = Math.floor(this.timer / this.MILLISECONDS_IN_MIN);
      this.seconds = Math.floor((this.timer % this.MILLISECONDS_IN_MIN) / 1000);
      this.milliseconds = Math.floor((this.timer % 1000) / 10);
      this.appendZeroToTimeUnit();
    });

  }

  private appendZeroToTimeUnit() {
    if (+this.minutes < 10) {
      this.minutes = `0${this.minutes}`;
    }

    if (+this.seconds < 10) {
      this.seconds = `0${this.seconds}`;
    }
          
    if (+this.milliseconds < 10) {
      this.milliseconds = `0${this.milliseconds}`;
    } 
  }

  resetTimer(): void {
    this.timer = 0;
    this.minutes = '00';
    this.seconds = '00';
    this.milliseconds = '00';
  }
}

export enum TimerButtonText {
  STOP = 'STOP',
  START = 'START',
  RESET = 'RESET'
}