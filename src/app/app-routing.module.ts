import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  { path: 'tasklist', component: TasklistComponent},
  { path: 'stopwatch', component: StopwatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
