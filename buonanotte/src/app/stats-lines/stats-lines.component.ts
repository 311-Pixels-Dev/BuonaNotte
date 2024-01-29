import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'stats-lines',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './stats-lines.component.html',
  styleUrl: './stats-lines.component.css'
})
export class StatsLinesComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
              {
                  label: 'Rem',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  tension: 0.4
              },
              {
                label: 'Awake',
                data: [33, 30, 41, 51, 11, 89, 31],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
              },
              {
                label: 'Light',
                data: [58, 44, 77, 81, 96, 20, 11],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
            {
              label: 'Deep',
              data: [25, 66, 95, 75, 51, 53, 35],
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
          },
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }
}
