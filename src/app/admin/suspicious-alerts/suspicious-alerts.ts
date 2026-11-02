import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SuspiciousAlert {
  id: number;
  user: string;
  activity: string;
  description: string;
  severity: 'High' | 'Medium' | 'Low';
  date: string;
  status: 'Pending' | 'Reviewed';
  auctionId: number;
}

@Component({
  selector: 'app-suspicious-alerts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suspicious-alerts.html',
  styleUrl: './suspicious-alerts.css'
})
export class SuspiciousAlerts {

  searchText = '';
  selectedSeverity = 'All';
  selectedStatus = 'All';

  selectedAlert: SuspiciousAlert | null = null;

  alerts: SuspiciousAlert[] = [
    {
      id: 1,
      user: 'Rahul Sharma',
      activity: 'Rapid Bidding',
      description: 'Multiple bids were placed within a very short time during the same auction.',
      severity: 'High',
      date: '02 Nov 2026, 10:30 AM',
      status: 'Pending',
      auctionId: 101
    },
    {
      id: 2,
      user: 'Amit Patil',
      activity: 'Unusual Bid Increase',
      description: 'The bid amount increased significantly compared to the previous bid.',
      severity: 'High',
      date: '02 Nov 2026, 11:15 AM',
      status: 'Pending',
      auctionId: 102
    },
    {
      id: 3,
      user: 'Priya Shah',
      activity: 'Repeated Invalid Bids',
      description: 'Several invalid bidding attempts were recorded.',
      severity: 'Medium',
      date: '01 Nov 2026, 02:20 PM',
      status: 'Reviewed',
      auctionId: 103
    },
    {
      id: 4,
      user: 'Karan Patel',
      activity: 'Multiple Quick Bids',
      description: 'Several bids were submitted within a short interval.',
      severity: 'Medium',
      date: '01 Nov 2026, 04:45 PM',
      status: 'Pending',
      auctionId: 104
    },
    {
      id: 5,
      user: 'Om Nagare',
      activity: 'Unusual Login Activity',
      description: 'An unusual login attempt was recorded for review.',
      severity: 'Low',
      date: '31 Oct 2026, 09:10 AM',
      status: 'Reviewed',
      auctionId: 105
    },
    {
      id: 6,
      user: 'Rohit Verma',
      activity: 'Repeated Bid Attempts',
      description: 'Repeated bidding attempts were detected for monitoring.',
      severity: 'Low',
      date: '30 Oct 2026, 01:30 PM',
      status: 'Pending',
      auctionId: 106
    }
  ];

  get totalAlerts(): number {
    return this.alerts.length;
  }

  get highRiskCount(): number {
    return this.alerts.filter(
      alert => alert.severity === 'High'
    ).length;
  }

  get mediumRiskCount(): number {
    return this.alerts.filter(
      alert => alert.severity === 'Medium'
    ).length;
  }

  get lowRiskCount(): number {
    return this.alerts.filter(
      alert => alert.severity === 'Low'
    ).length;
  }

  get pendingCount(): number {
    return this.alerts.filter(
      alert => alert.status === 'Pending'
    ).length;
  }

  get reviewedCount(): number {
    return this.alerts.filter(
      alert => alert.status === 'Reviewed'
    ).length;
  }

  get filteredAlerts(): SuspiciousAlert[] {

    return this.alerts.filter(alert => {

      const search = this.searchText.toLowerCase();

      const matchesSearch =
        alert.user.toLowerCase().includes(search) ||
        alert.activity.toLowerCase().includes(search) ||
        alert.description.toLowerCase().includes(search);

      const matchesSeverity =
        this.selectedSeverity === 'All' ||
        alert.severity === this.selectedSeverity;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        alert.status === this.selectedStatus;

      return matchesSearch && matchesSeverity && matchesStatus;
    });
  }

  viewAlert(alert: SuspiciousAlert): void {
    this.selectedAlert = alert;
  }

  closeDetails(): void {
    this.selectedAlert = null;
  }

  markReviewed(alert: SuspiciousAlert): void {
    alert.status = 'Reviewed';
  }

  markPending(alert: SuspiciousAlert): void {
    alert.status = 'Pending';
  }

}