import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './components/launch/launch.component';

const routes: Routes = [
  { path: '', redirectTo: 'launch', pathMatch: 'full' },
  { path: 'launch', component: LaunchComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
