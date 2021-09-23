import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as cheerio from 'cheerio';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(private httpClient: HttpClient) {

  }

  parse_episode_url(url: string): Observable<string> {
    if (url.includes("pca.st")) {
      return this.get_episode_url_from_pocket_casts(url)
    } else if (url.includes("podcasts.apple")) {
      return this.get_episode_url_from_itunes(url)
    }
    return of(url)
  }

  get_episode_url_from_pocket_casts(url: string): Observable<string> {
    return this.httpClient.get(url, { responseType: 'text' })
      .pipe(map((response: any) => {
        const $ = cheerio.load(response);

        const myLink = $('#audio_player').get()[0].attribs.src;

        return myLink;
      }));
  }

  get_episode_url_from_itunes(url: string): Observable<string> {
    return this.httpClient.get(url, { responseType: 'text' })
      .pipe(map((response: any) => {

        console.log(response)
        const $ = cheerio.load(response);

        const myLink = (<any>$('#shoebox-ember-data-store').get()[0].children[0]).data;

        const parsed = JSON.parse(myLink);

        return (<any>Object.values(parsed)[0]).data.attributes.assetUrl;
      }))
  }
}
