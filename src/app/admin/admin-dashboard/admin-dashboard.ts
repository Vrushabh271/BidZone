import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
 imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {

  adminName = 'Administrator';

  stats = [
    {
      title: 'Total Users',
      value: 250,
      icon: '👥',
      color: 'blue'
    },
    {
      title: 'Total Products',
      value: 120,
      icon: '📦',
      color: 'purple'
    },
    {
      title: 'Active Auctions',
      value: 35,
      icon: '🔨',
      color: 'green'
    },
    {
      title: 'Completed Auctions',
      value: 85,
      icon: '🏆',
      color: 'orange'
    },
    {
      title: 'Pending Products',
      value: 10,
      icon: '⏳',
      color: 'red'
    }
  ];

  activities = [
    {
      user: 'Om Nagare',
      activity: 'New product listed',
      date: '02 Nov 2026',
      status: 'Pending'
    },
    {
      user: 'Rahul Sharma',
      activity: 'Placed a new bid',
      date: '02 Nov 2026',
      status: 'Active'
    },
    {
      user: 'Amit Patil',
      activity: 'Auction completed',
      date: '01 Nov 2026',
      status: 'Completed'
    },
    {
      user: 'Priya Shah',
      activity: 'Registered as seller',
      date: '01 Nov 2026',
      status: 'Active'
    }
  ];

}