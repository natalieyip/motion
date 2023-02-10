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

    this.timerId = setInterval(() => {
      this.timer += 1
      this.buttonText = TimerButtonText.STOP;
      this.isRunning = true;
    }, 1000);

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