import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'; // Adjusted path

@Component({
  selector: 'app-auth',
  standalone: true, // Ensure this is present for standalone components
  imports: [], // Add FormsModule if using ngModel later, not needed for this basic form
  template: `
    <div class="auth-container">
      <h2>Login</h2>
      <form (submit)="login()">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  `,
  styles: [`
    .auth-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    label {
      font-weight: bold;
    }
    input {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 3px;
    }
    button {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
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
