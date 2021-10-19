import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalFileComponent } from './local-file/local-file.component';
import { PodcastUrlComponent } from './podcast-url/podcast-url.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { CutterComponent } from './cutter/cutter.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalFileComponent,
    PodcastUrlComponent,
    HomeComponent,
    PlayerComponent,
    CutterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
