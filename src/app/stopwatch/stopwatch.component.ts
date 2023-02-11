import { Component } from '@angular/core';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})

export class StopwatchComponent {
  timer: number = 0;
  isRunning: boolean = false; 
  timerId: NodeJS.Timeout;
  buttonText: string = TimerButtonText.START;
  TimerButtonText: typeof TimerButtonText = TimerButtonText;

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
    });

  }

  resetTimer(): void {
    this.timer = 0;
  }
}

export enum TimerButtonText {
  STOP = 'STOP',
  START = 'START',
  RESET = 'RESET'
}