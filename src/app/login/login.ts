  import { Component } from '@angular/core';
  import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
  import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {

  showPassword = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (!this.loginForm.valid) return;

    const storedUser = localStorage.getItem('user');
    
    if (!storedUser) {
      alert('No hay un usuario registrado. Regístralo primero.');
      return;
    }

    const { username, password } = this.loginForm.value;
    const user = JSON.parse(storedUser);

    if (username === user.username && password === user.password) {
      alert('Inicio de sesión exitoso 🎉');
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }
}
