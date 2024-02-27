import { StatisticsService } from './service/statistics.service';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  constructor(private readonly statService: StatisticsService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.statService.get().subscribe((data) => {
      console.log(data);
      this.initBarChar(
        data.appPerEmp,
        data.appPerEmp.map((elt: any) => elt._id)
      );

      this.initLineChart(
        data.appPerDate,
        data.appPerDate.map((elt: any) => elt.date)
      );
    });
  }
  initBarChar(data: any, labels: string[]) {
    const lineCanvasEle: any = document.getElementById('bar_chart');
    new Chart(lineCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Nombre de service effectués par employé',
            data: data.map((elt: any) => elt.count),
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  initLineChart(data: any, labels: string[]) {
    const lineCanvasEle: any = document.getElementById('line_chart');
    new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Évolution du nombre de service vendus',
            data: data.map((elt: any) =>
              elt.numberOfServices
            ),
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
