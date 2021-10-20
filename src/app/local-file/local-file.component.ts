import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-local-file',
  templateUrl: './local-file.component.html',
  styleUrls: ['./local-file.component.scss']
})
export class LocalFileComponent implements OnInit {

  local_url: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { 

  }

  ngOnInit(): void {
  }

  onInputChange(myEvent: any) {
    if (myEvent.target.files && myEvent.target.files[0]) {
      const file = myEvent.target.files[0];
      const fr = new FileReader();
      console.log("I get to here too")
      fr.onload = (event: any) => {
        let base64 = event.target.result
        const BASE64_MARKER = ';base64,';
        const base64Index = event.target.result.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        base64 = event.target.result.substring(base64Index);
        const raw = window.atob(base64);
        const rawLength = raw.length;
        const array = new Uint8Array(new ArrayBuffer(rawLength));

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
