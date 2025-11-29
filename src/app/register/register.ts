import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html'
})
export class Register {

  step = 1;
  showPassword = false;

  constructor(private router: Router) {}

  // ================================
  // FORMULARIO COMPLETO
  // ================================
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),

    birthdate: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),

    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  // ================================
  // MOSTRAR / OCULTAR CONTRASEÑA
  // ================================
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // ================================
  // VALIDACIONES DE CADA PASO
  // ================================
  isStep1Valid() {
    return (
      this.registerForm.get('username')?.valid &&
      this.registerForm.get('password')?.valid &&
      this.registerForm.get('repeatPassword')?.value === this.registerForm.get('password')?.value
    );
  }

  isStep2Valid() {
    return (
      this.registerForm.get('birthdate')?.valid &&
      this.registerForm.get('gender')?.valid
    );
  }

  // ================================
  // CAMBIO DE PASOS
  // ================================
  nextStep() {
    if (this.step < 3) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  // ================================
  // SUBMIT FINAL
  // ================================
  onSubmit() {
    alert('Usuario registrado correctamente');

    // IMPORTANTE! evita refresh
    // ya no es necesario event.preventDefault() con Angular,
    // pero por si acaso nunca pongas <button type="button">
    // para submit final.
    
    this.router.navigate(['/login']); // ahora sí funciona
  }
}
