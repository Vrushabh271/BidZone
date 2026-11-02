export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Seller' | 'Buyer';
  status: 'Active' | 'Blocked';
}

export interface AdminAlert {
  id: number;
  message: string;
  severity: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'Reviewed';
}

export interface AdminStats {
  totalUsers: number;
  totalProducts: number;
  activeAuctions: number;
  completedAuctions: number;
  pendingProducts: number;
}