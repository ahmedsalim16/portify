import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
  standalone:false,
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private firebase: FirebaseService,private router: Router) {}

  async login() {
    try {
      await this.firebase.login(this.email, this.password);
      this.message = '✅ Login successful!';
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.message = '❌ ' + err.message;
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
