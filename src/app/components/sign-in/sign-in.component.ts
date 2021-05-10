import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['busqueda']);
    }
  }

  mockUser() {
    this.loginForm.setValue({
      user: 'agustin7_7@yahoo.com.ar',
      password: 'testUser'
    })
  }

}