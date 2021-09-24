import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ScraperService } from '../services/scraper.service';

@Component({
  selector: 'app-podcast-url',
  templateUrl: './podcast-url.component.html',
  styleUrls: ['./podcast-url.component.scss']
})
export class PodcastUrlComponent {

  constructor(
    private httpClient: HttpClient,
    private scraperService: ScraperService
  ) { }

  title = 'ng-audio-cutter';
  url = ""

  onUrlButtonClick() {

    this.httpClient.get(this.url, { responseType: 'blob' })
      .subscribe(response => {
        const a = document.createElement("a");
        document.body.appendChild(a);
        const url = URL.createObjectURL(response)
        console.log(url)
        a.href = url;
        a.download = "whatever";
        a.click();
        window.URL.revokeObjectURL(url);
      }
      );
  }

  onUrlInput(myEvent: any) {
    console.log(myEvent.target.value)
    const myUrl: string = myEvent.target.value;
    this.scraperService.parse_episode_url(myUrl)
      .subscribe(data => {
        this.url = data
      });
  }
}
