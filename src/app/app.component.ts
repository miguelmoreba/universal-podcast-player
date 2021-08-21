import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ScraperService } from './scraper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    private scraperService: ScraperService
    ) { }

  title = 'ng-audio-cutter';
  link = new FormControl("")
  local_url: any


  onUrlButtonClick() {

    this.httpClient.get(this.link.value, { responseType: 'blob' })
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

  onInputChange(myEvent: any) {
    if (myEvent.target.files && myEvent.target.files[0]) {
      let file = myEvent.target.files[0];
      let fr = new FileReader();
      console.log("I get to here too")
      fr.onload = (event: any) => {
        let base64 = event.target.result
        let BASE64_MARKER = ';base64,';
        let base64Index = event.target.result.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        base64 = event.target.result.substring(base64Index);
        let raw = window.atob(base64);
        let rawLength = raw.length;
        let array = new Uint8Array(new ArrayBuffer(rawLength));

        for (let i = 0; i < rawLength; i++) {
          array[i] = raw.charCodeAt(i);
        }

        const blob = new Blob([array], { type: 'audio/mp3' });
        const blobUrl = URL.createObjectURL(blob);
        console.log(blobUrl)
        this.local_url = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl)
      }
      fr.readAsDataURL(file)
    }
  }
}
