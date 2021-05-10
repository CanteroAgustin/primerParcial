import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    rol: new FormControl(''),
  });

  user = new User;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresar() {
    if (this.loginForm.get('user').value === 'mock' && this.loginForm.get('password').value === 'mock') {
      this.user.user = this.loginForm.get('user').value;
      this.user.password = this.loginForm.get('password').value;
      this.user.rol = this.loginForm.get('rol').value;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['altaProducto']);
    }

  }

  mock() {
    this.loginForm.setValue({
      user: 'mock',
      password: 'mock',
      rol: 'admin'
    })
    this.loginForm.get('rol').setValue('admin');
  }
}
