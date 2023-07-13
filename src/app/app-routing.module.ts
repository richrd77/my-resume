import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolderComponent } from './components';

const routes: Routes = [
  { path: '**', component: HolderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
