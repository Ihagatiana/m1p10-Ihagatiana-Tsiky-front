import { StatisticsService } from './service/statistics.service';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  loadAll = false;
  loadBenefits = false;
  form: FormGroup;
  showBenefitsGraph = false;
  benefitsGrap: any | null = null;
  avgTimePerEmps: any[] = [];
  constructor(
    private readonly statService: StatisticsService,
    private readonly formBuilder: FormBuilder
  ) {
    Chart.register(...registerables);
    this.form = this.formBuilder.group({
      salary: [0, Validators.required],
      rent: [0, Validators.required],
      purchases: [0, Validators.required],
      expenses: [0, Validators.required],
    });
  }

  submitForm() {
    this.loadBenefits = true;
    this.showBenefitsGraph = true;
    this.statService.getBenefitsPerMonth(this.form.value).subscribe(
      (response) => {
        if (this.benefitsGrap === null) {
          this.initLineChartBenefits(
            response.benefitsPerMonth,
            response.benefitsPerMonth.map((elt: any) => elt.date)
          );
        } else {
          this.benefitsGrap.data.datasets[0].data =
            response.benefitsPerMonth.map((elt: any) => elt.ca);
          this.benefitsGrap.update();
        }
        this.loadBenefits = false;
      },
      () => (this.loadBenefits = false)
    );
  }

  resetForm() {
    this.benefitsGrap === null;
    this.showBenefitsGraph = false;
    this.form.reset();
  }

  ngOnInit() {
    this.loadAll = true;
    this.statService.get().subscribe(
      (data) => {
        this.initLineChart(
          data.appPerDate,
          data.appPerDate.map((elt: any) => elt.date)
        );

        this.initLineChartCa(
          data.caPerMonth,
          data.caPerMonth.map((elt: any) => elt.date)
        );

        this.avgTimePerEmps = data.hoursPerEmp;

        this.loadAll = false;
      },
      () => (this.loadAll = false)
    );
  }

  initLineChartBenefits(data: any, labels: string[]) {
    const lineCanvasEle: any = document.getElementById('line_chart-benefits');
    this.benefitsGrap = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: `Bénéfice par mois`,
            data: data.map((elt: any) => elt.ca),
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

  initLineChartCa(data: any, labels: string[]) {
    const lineCanvasEle: any = document.getElementById('line_chart-ca');
    new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: `Chiffre d'affaire par mois`,
            data: data.map((elt: any) => elt.ca),
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
            label: 'Nombre de réservation par mois',
            data: data.map((elt: any) => elt.numberOfServices),
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
