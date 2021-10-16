import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScraperService } from '../services/scraper.service';

@Component({
  selector: 'app-podcast-url',
  templateUrl: './podcast-url.component.html',
  styleUrls: ['./podcast-url.component.scss']
})
export class PodcastUrlComponent {

  constructor(
    private httpClient: HttpClient,
    private scraperService: ScraperService,
    private route: ActivatedRoute
  ) {
    
  };


  title = 'ng-audio-cutter';
  _url = ""

  get url(): string{
    return this._url;
  }

  set url(url: string) {
    this.scraperService.parse_episode_url(url)
      .subscribe(data => {
        this._url = data
      });
  }

  ngOnInit(): void {
    const myUrl = this.route.snapshot.queryParams['url']
    if (myUrl !== null) {
      this.url = myUrl
    };
  }

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
}
