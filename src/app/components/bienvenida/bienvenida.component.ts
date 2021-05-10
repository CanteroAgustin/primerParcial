import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GitUser } from 'src/app/models/git-user';
import { BienvenidaServiceService } from 'src/app/services/bienvenida-service.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  user: GitUser = new GitUser;

  constructor(private bienvenidaService: BienvenidaServiceService, private router: Router) { }

  ngOnInit(): void {
    this.bienvenidaService.getGitUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  ingresar(){
    this.router.navigate(['sign-in']);
  }
}
