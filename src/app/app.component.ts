import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dropZoneApp';
  badTypes = ["image/png", "image/jpeg", "image/jpg"]

  onFileDropped(files: File[]) {
    console.log(files);
  }

  errorcheck(error: string[]) {
    console.log("error:", error);
  }
}
