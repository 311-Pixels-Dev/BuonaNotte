import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { StatsDoughnutComponent } from "../stats-doughnut/stats-doughnut.component";
import { StatsLinesComponent } from "../stats-lines/stats-lines.component";

@Component({
    selector: 'stats-info',
    standalone: true,
    templateUrl: './stats-info.component.html',
    styleUrl: './stats-info.component.css',
    imports: [CardModule, PanelModule, SkeletonModule, DividerModule, ProgressBarModule, StatsDoughnutComponent, StatsLinesComponent]
})

export class StatsInfoComponent {

}