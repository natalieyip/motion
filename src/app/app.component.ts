import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, timer, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dateTime: Observable<Date>

  ngOnInit() {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date()
      })
    )
  }
}
