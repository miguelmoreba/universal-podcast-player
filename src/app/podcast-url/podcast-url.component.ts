import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { ITunesResponse } from '../interfaces/itunes.interface';
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

  private _url = "";
  private _originalUrl = "";
  startTime = 0;
  episode: any;

  get url(): string{
    return this._url;
  }

  set originalUrl(url: string) {
    this._originalUrl = url;
    this.scraperService.parse_episode_url(url)
      .subscribe(data => {
        this._url = data;
      });
    this.scraperService.getEpisodeNameAndPodcastName(url)
      .pipe(
        mergeMap((episodeKeyPair: any) => this.scraperService.getItunesInfo(episodeKeyPair.podcastEpisodeTitle, episodeKeyPair.podcastName))
      ).subscribe((episode: ITunesResponse) => {
        this.episode = episode;
      });
  }

  get originalUrl() {
    return this._originalUrl;
  }

  ngOnInit(): void {
    const myUrl = this.route.snapshot.queryParams['url'];
    if (myUrl) {
      this.originalUrl = myUrl
    };
    const startTime = this.route.snapshot.queryParams['start'];
    if (startTime) {
      this.startTime = +startTime;
    }
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
