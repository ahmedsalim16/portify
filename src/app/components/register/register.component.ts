import { Component } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '../../firebase.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false,
})
export class RegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';
  message = '';

  constructor(private firebase: FirebaseService,private router: Router) {}

  async register() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.message = '⚠️ Please fill all fields.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.message = '❌ Passwords do not match.';
      return;
    }

    try {
      await this.firebase.register(this.email, this.password);
      this.message = '✅ Account created successfully!';
       this.router.navigate(['/login']);
    } catch (error: any) {
      this.message = '❌ ' + error.message;
    }
  }
    async loginWithGoogle() {
  try {
    const result = await this.firebase.googleLogin();
    console.log(result.user);
    this.router.navigate(['/dashboard']); // بعد تسجيل الدخول
  } catch (error: any) {
    this.message = '❌ ' + error.message;
  }
}
}
