import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'stats-doughnut',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './stats-doughnut.component.html',
  styleUrl: './stats-doughnut.component.css'
})
export class StatsDoughnutComponent {
  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Awake', 'REM', 'Light', 'Deep'],
      datasets: [{
        data: [19, 25, 100, 170],
        backgroundColor: [documentStyle.getPropertyValue('--primary-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--cyan-500')],
        hoverBackgroundColor: [documentStyle.getPropertyValue('--primary-400'), documentStyle.getPropertyValue('--purple-400'), documentStyle.getPropertyValue('--indigo-400'),, documentStyle.getPropertyValue('--cyan-400')]
      }]
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
}
