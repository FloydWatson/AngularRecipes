import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // home route
  loadedFeature = 'recipe';

  // recieveing event from header
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
