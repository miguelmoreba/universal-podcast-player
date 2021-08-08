import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-audio-cutter';
  link = new FormControl("")


  async onButtonClick() {

    var a = document.createElement("a");
    document.body.appendChild(a);

    console.log("Heeeey");
    const file = await fetch(this.link.value, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(r => r.blob())
      .then(blobFile => new File([blobFile], "fileNameGoesHere", { type: "audio/mp3" }))

    const url = window.URL.createObjectURL(file)

    a.href = url;
    a.download = "whatever";
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
