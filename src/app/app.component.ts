import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Alvin Keyser';
  linkedin_icon_path: string = '/assets/img/linkedin-icon.png';
  github_icon_path: string = '/assets/img/github-icon.png';
}
