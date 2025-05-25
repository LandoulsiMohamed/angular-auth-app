import { Component, inject,  OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; // Adjusted path
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

// Define a more robust interface for your menu items
interface MenuItem {
  label: string;
  route: string;
  icon?: string; // Add this optional property for Material icons
  children?: MenuItem[]; // Optional for top menu items
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    RouterModule,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }


  // Reference to the sidenav component for programmatic control
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // Menu items for the horizontal top bar
  topMenuItems = [
    { label: 'Agents', route: '/agents' },
    { label: 'Tiers', route: '/tiers' },
    {
      label: 'Dettes',
      children: [
        { label: 'Consultation', route: '/dettes/consultation' },
        { label: 'Saisie', route: '/dettes/saisie' }
      ]
    },
    { label: 'Consultation', route: '/consultation' },
    { label: 'Répartition', route: '/repartition' },
    { label: 'Paiements', route: '/paiements' },
    {
      label: 'Outillage',
      children: [
        { label: 'Adminqqqqqqqqqqqqqqqqqq', route: '/outillage/admin' },
        { label: 'Rapports', route: '/outillage/rapports' }
      ]
    },
    { label: 'Aide', route: '/aide' }
  ];

  // Menu items for the left sidebar
  sidebarMenuItems = [
    { label: 'Accueil', route: '/', icon: 'money_off' },
    { label: 'Déconnexion', route: '/logout' , icon: 'gavel'},
    { label: 'Accessibilité : non conforme', route: '/accessibility' , icon: 'settings'}
  ];

  ngOnInit() {
    // Initialization logic if needed
  }

  // Toggle the sidenav on small screens (optional, if you want a burger menu)
  toggleSidenav() {
    this.sidenav.toggle();
  }
}

