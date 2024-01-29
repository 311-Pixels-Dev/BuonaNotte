import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatsInfoComponent } from "./stats-info/stats-info.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StatsInfoComponent]
})
export class AppComponent {
  title = 'buonanotte';
}
