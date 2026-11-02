
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Chart,
  registerables
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class Analytics implements AfterViewInit, OnDestroy {

  @ViewChild('monthlyChart')
  monthlyChart!: ElementRef<HTMLCanvasElement>;

  @ViewChild('categoryChart')
  categoryChart!: ElementRef<HTMLCanvasElement>;

  @ViewChild('paymentChart')
  paymentChart!: ElementRef<HTMLCanvasElement>;

  @ViewChild('userChart')
  userChart!: ElementRef<HTMLCanvasElement>;

  charts: Chart[] = [];

  stats = [
    {
      title: 'Total Revenue',
      value: '₹8,45,000',
      icon: '💰',
      color: 'blue'
    },
    {
      title: 'Total Bids',
      value: '1,250',
      icon: '🔨',
      color: 'purple'
    },
    {
      title: 'Total Users',
      value: '250',
      icon: '👥',
      color: 'green'
    },
    {
      title: 'Completed Auctions',
      value: '85',
      icon: '🏆',
      color: 'orange'
    }
  ];

  ngAfterViewInit(): void {
    this.createMonthlyChart();
    this.createCategoryChart();
    this.createPaymentChart();
    this.createUserChart();
  }

  createMonthlyChart(): void {

    const chart = new Chart(
      this.monthlyChart.nativeElement,
      {
        type: 'bar',

        data: {
          labels: [
            'May',
            'June',
            'July',
            'August',
            'September',
            'October'
          ],

          datasets: [{
            label: 'Auctions',
            data: [12, 19, 15, 25, 20, 32],
            backgroundColor: '#2563eb',
            borderRadius: 7
          }]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              display: false
            }
          },

          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
    );

    this.charts.push(chart);
  }

  createCategoryChart(): void {

    const chart = new Chart(
      this.categoryChart.nativeElement,
      {
        type: 'doughnut',

        data: {
          labels: [
            'Electronics',
            'Fashion',
            'Sports',
            'Others'
          ],

          datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
              '#2563eb',
              '#9333ea',
              '#16a34a',
              '#f97316'
            ],
            borderWidth: 2
          }]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      }
    );

    this.charts.push(chart);
  }

  createPaymentChart(): void {

    const chart = new Chart(
      this.paymentChart.nativeElement,
      {
        type: 'pie',

        data: {
          labels: [
            'Completed',
            'Pending',
            'Failed'
          ],

          datasets: [{
            data: [70, 20, 10],
            backgroundColor: [
              '#16a34a',
              '#f59e0b',
              '#dc2626'
            ]
          }]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      }
    );

    this.charts.push(chart);
  }

  createUserChart(): void {

    const chart = new Chart(
      this.userChart.nativeElement,
      {
        type: 'line',

        data: {
          labels: [
            'May',
            'June',
            'July',
            'August',
            'September',
            'October'
          ],

          datasets: [
            {
              label: 'Buyers',
              data: [30, 45, 50, 65, 75, 90],
              borderColor: '#2563eb',
              backgroundColor: '#2563eb',
              tension: 0.4
            },
            {
              label: 'Sellers',
              data: [15, 20, 25, 35, 40, 50],
              borderColor: '#16a34a',
              backgroundColor: '#16a34a',
              tension: 0.4
            }
          ]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              position: 'bottom'
            }
          },

          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
    );

    this.charts.push(chart);
  }

  ngOnDestroy(): void {
    this.charts.forEach(chart => chart.destroy());
    this.charts = [];
  }

}
