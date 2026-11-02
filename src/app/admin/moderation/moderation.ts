import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  seller: string;
  category: string;
  price: number;
  image: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  description: string;
}

@Component({
  selector: 'app-moderation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './moderation.html',
  styleUrl: './moderation.css'
})
export class Moderation {

  searchText = '';
  selectedCategory = 'All';
  selectedStatus = 'All';

  selectedProduct: Product | null = null;

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      seller: 'Om Nagare',
      category: 'Electronics',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      status: 'Pending',
      description: 'Apple iPhone 15 in good condition with original accessories.'
    },
    {
      id: 2,
      name: 'Gaming Laptop',
      seller: 'Rahul Sharma',
      category: 'Electronics',
      price: 55000,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
      status: 'Pending',
      description: 'High performance gaming laptop.'
    },
    {
      id: 3,
      name: 'Mountain Bicycle',
      seller: 'Amit Patil',
      category: 'Sports',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500',
      status: 'Approved',
      description: 'Mountain bicycle in excellent condition.'
    },
    {
      id: 4,
      name: 'Digital Camera',
      seller: 'Priya Shah',
      category: 'Electronics',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
      status: 'Rejected',
      description: 'Digital camera with lens and accessories.'
    },
    {
      id: 5,
      name: 'Wrist Watch',
      seller: 'Karan Patel',
      category: 'Fashion',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      status: 'Pending',
      description: 'Stylish wrist watch.'
    }
  ];

  get pendingCount(): number {
    return this.products.filter(p => p.status === 'Pending').length;
  }

  get approvedCount(): number {
    return this.products.filter(p => p.status === 'Approved').length;
  }

  get rejectedCount(): number {
    return this.products.filter(p => p.status === 'Rejected').length;
  }

  get filteredProducts(): Product[] {
    return this.products.filter(product => {

      const search = this.searchText.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.seller.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        product.status === this.selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  approveProduct(product: Product): void {
    product.status = 'Approved';
    this.selectedProduct = null;
  }

  rejectProduct(product: Product): void {
    product.status = 'Rejected';
    this.selectedProduct = null;
  }

  viewProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeDetails(): void {
    this.selectedProduct = null;
  }

}