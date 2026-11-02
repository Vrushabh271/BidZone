import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Auction {
  id: number;
  productName: string;
  seller: string;
  category: string;
  startingPrice: number;
  currentBid: number;
  highestBidder: string;
  startDate: string;
  endDate: string;
  status: 'Upcoming' | 'Active' | 'Completed';
}

@Component({
  selector: 'app-auction-monitoring',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auction-monitoring.html',
  styleUrl: './auction-monitoring.css'
})
export class AuctionMonitoring {

  searchText = '';
  selectedStatus = 'All';
  selectedCategory = 'All';

  selectedAuction: Auction | null = null;

  auctions: Auction[] = [
    {
      id: 101,
      productName: 'iPhone 15',
      seller: 'Om Nagare',
      category: 'Electronics',
      startingPrice: 20000,
      currentBid: 28000,
      highestBidder: 'Rahul Sharma',
      startDate: '2026-11-01T10:00',
      endDate: '2026-11-05T18:00',
      status: 'Active'
    },
    {
      id: 102,
      productName: 'Gaming Laptop',
      seller: 'Rahul Sharma',
      category: 'Electronics',
      startingPrice: 45000,
      currentBid: 55000,
      highestBidder: 'Amit Patil',
      startDate: '2026-11-01T12:00',
      endDate: '2026-11-06T18:00',
      status: 'Active'
    },
    {
      id: 103,
      productName: 'Mountain Bicycle',
      seller: 'Amit Patil',
      category: 'Sports',
      startingPrice: 10000,
      currentBid: 10000,
      highestBidder: 'No Bid Yet',
      startDate: '2026-11-06T10:00',
      endDate: '2026-11-10T18:00',
      status: 'Upcoming'
    },
    {
      id: 104,
      productName: 'Digital Camera',
      seller: 'Priya Shah',
      category: 'Electronics',
      startingPrice: 15000,
      currentBid: 22000,
      highestBidder: 'Om Nagare',
      startDate: '2026-10-25T10:00',
      endDate: '2026-10-30T18:00',
      status: 'Completed'
    },
    {
      id: 105,
      productName: 'Wrist Watch',
      seller: 'Karan Patel',
      category: 'Fashion',
      startingPrice: 3000,
      currentBid: 4500,
      highestBidder: 'Rahul Sharma',
      startDate: '2026-11-02T09:00',
      endDate: '2026-11-04T18:00',
      status: 'Active'
    },
    {
      id: 106,
      productName: 'Sports Shoes',
      seller: 'Priya Shah',
      category: 'Fashion',
      startingPrice: 2000,
      currentBid: 2000,
      highestBidder: 'No Bid Yet',
      startDate: '2026-11-08T10:00',
      endDate: '2026-11-12T18:00',
      status: 'Upcoming'
    }
  ];

  get totalAuctions(): number {
    return this.auctions.length;
  }

  get activeAuctions(): number {
    return this.auctions.filter(
      a => a.status === 'Active'
    ).length;
  }

  get upcomingAuctions(): number {
    return this.auctions.filter(
      a => a.status === 'Upcoming'
    ).length;
  }

  get completedAuctions(): number {
    return this.auctions.filter(
      a => a.status === 'Completed'
    ).length;
  }

  get filteredAuctions(): Auction[] {
    return this.auctions.filter(auction => {

      const search = this.searchText.toLowerCase();

      const matchesSearch =
        auction.productName.toLowerCase().includes(search) ||
        auction.seller.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        auction.status === this.selectedStatus;

      const matchesCategory =
        this.selectedCategory === 'All' ||
        auction.category === this.selectedCategory;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }

  viewAuction(auction: Auction): void {
    this.selectedAuction = auction;
  }

  closeDetails(): void {
    this.selectedAuction = null;
  }

}