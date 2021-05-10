import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GitUser } from '../models/git-user';

@Injectable({
  providedIn: 'root'
})
export class BienvenidaServiceService {

  constructor(private http: HttpClient) { }

  getGitUser(){
    return this.http.get<GitUser>('https://api.github.com/users/canteroagustin');
  }
}
