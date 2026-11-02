import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Blocked';
  joinedDate: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement {

  searchText = '';
  selectedRole = 'All';

  users: User[] = [
    {
      id: 1,
      name: 'Om Nagare',
      email: 'om@gmail.com',
      role: 'Seller',
      status: 'Active',
      joinedDate: '01 Nov 2026'
    },
    {
      id: 2,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      role: 'Buyer',
      status: 'Active',
      joinedDate: '02 Nov 2026'
    },
    {
      id: 3,
      name: 'Amit Patil',
      email: 'amit@gmail.com',
      role: 'Seller',
      status: 'Blocked',
      joinedDate: '25 Oct 2026'
    },
    {
      id: 4,
      name: 'Priya Shah',
      email: 'priya@gmail.com',
      role: 'Buyer',
      status: 'Active',
      joinedDate: '28 Oct 2026'
    },
    {
      id: 5,
      name: 'Admin User',
      email: 'admin@gmail.com',
      role: 'Admin',
      status: 'Active',
      joinedDate: '20 Oct 2026'
    }
  ];

  get filteredUsers(): User[] {
    return this.users.filter(user => {

      const matchesSearch =
        user.name.toLowerCase().includes(
          this.searchText.toLowerCase()
        ) ||
        user.email.toLowerCase().includes(
          this.searchText.toLowerCase()
        );

      const matchesRole =
        this.selectedRole === 'All' ||
        user.role === this.selectedRole;

      return matchesSearch && matchesRole;
    });
  }

  get totalUsers(): number {
    return this.users.length;
  }

  get activeUsers(): number {
    return this.users.filter(
      user => user.status === 'Active'
    ).length;
  }

  get blockedUsers(): number {
    return this.users.filter(
      user => user.status === 'Blocked'
    ).length;
  }

  toggleStatus(user: User): void {
    user.status =
      user.status === 'Active' ? 'Blocked' : 'Active';
  }

  viewUser(user: User): void {
    alert(
      `Name: ${user.name}\nEmail: ${user.email}\nRole: ${user.role}\nStatus: ${user.status}`
    );
  }

}