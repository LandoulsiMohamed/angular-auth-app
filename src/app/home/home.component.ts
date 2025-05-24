import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; // Adjusted path

@Component({
  selector: 'app-home',
  standalone: true, // Ensure this is present for standalone components
  imports: [],
  template: `
    <div class="home-container">
      <h2>Welcome to the Home Page!</h2>
      <p>You are successfully logged in.</p>
      <button (click)="logout()">Logout</button>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    h2 {
      color: #333;
    }
    p {
      color: #555;
      margin-bottom: 20px;
    }
    button {
      padding: 10px 20px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    button:hover {
      background-color: #c82333;
    }
  `]
})
export class HomeComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
