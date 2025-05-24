import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'; // Adjusted path

@Component({
  selector: 'app-auth',
  standalone: true, // Ensure this is present for standalone components
  imports: [], // Add FormsModule if using ngModel later, not needed for this basic form
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  login(): void {
    // In a real app, you'd take username/password from the form
    this.authService.login(); // Sets the dummy token
    this.router.navigate(['/home']);
  }
}
