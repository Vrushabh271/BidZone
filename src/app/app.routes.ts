import { Routes } from '@angular/router';

export const routes: Routes = [

  // Home Page
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },

  // Admin Dashboard
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin-dashboard/admin-dashboard')
        .then(m => m.AdminDashboard)
  },

  // User Management
  {
    path: 'admin/users',
    loadComponent: () =>
      import('./admin/user-management/user-management')
        .then(m => m.UserManagement)
  },

  // Product Moderation
  {
    path: 'admin/moderation',
    loadComponent: () =>
      import('./admin/moderation/moderation')
        .then(m => m.Moderation)
    },
 //auction Monitoring
 {
  path: 'admin/auctions',
  loadComponent: () =>
    import('./admin/auction-monitoring/auction-monitoring')
      .then(m => m.AuctionMonitoring)
},
{
  path: 'admin/alerts',
  loadComponent: () =>
    import('./admin/suspicious-alerts/suspicious-alerts')
      .then(m => m.SuspiciousAlerts)
},
{
  path: 'admin/analytics',
  loadComponent: () =>
    import('./admin/analytics/analytics')
      .then(m => m.Analytics)
},
];