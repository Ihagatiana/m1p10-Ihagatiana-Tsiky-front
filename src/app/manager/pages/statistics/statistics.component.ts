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
      this.initLineChart(
        data.appPerEmp,
        data.appPerEmp.map((elt: any) => elt._id)
      );
    });
  }
  initLineChart(data: any, labels: string[]) {
    const lineCanvasEle: any = document.getElementById('line_chart');
    new Chart(lineCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Nombre de service effectué',
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
}
