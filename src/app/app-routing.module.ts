import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalFileComponent } from './local-file/local-file.component';
import { PodcastUrlComponent } from './podcast-url/podcast-url.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'local-file', component: LocalFileComponent},
  {path: 'podcast-url', component: PodcastUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
