import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userState: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
      } else {
        localStorage.removeItem('user')
      }
    })
  }

  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user || this.userState);
        this.ngZone.run(() => {
          this.router.navigate(['busqueda']);
        });
      }).catch((error) => {
        console.log('Error: ' + error.message);
        //this.openSnackBar('Error: ' + error.message);
      })
  }

  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user || this.userState);
      }).catch((error) => {
        console.log('Error: ' + error.message);
        //this.openSnackBar('Error: ' + error.message);
      })
  }

  SendVerificationMail() {
    return this.afAuth.currentUser
      .then(u => {
        if (u) {
          u.sendEmailVerification()
        }
      })
      .then(() => {
        this.router.navigate(['email-verification']);
      })
  }

  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        console.log('El correo de recuperacion fue enviado.');
        //this.openSnackBar('El correo de recuperacion fue enviado, revisa tu bandeja');
      }).catch((error) => {
        console.log('Error: ' + error.message);
        //this.openSnackBar('Error: ' + error.message);
      })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || "{}");
    return (user && user.emailVerified) ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  AuthLogin(provider: firebase.default.auth.AuthProvider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result.user || this.userState());
        this.ngZone.run(() => {
          this.router.navigate(['busqueda']);
        })
      }).catch((error) => {
        console.log('Error: ' + error.message);
        //this.openSnackBar('Error: ' + error.message);
      })
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userState: User = {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      emailVerified: user.emailVerified,
      rol: user.rol || 'empleado'

    }
    localStorage.setItem('user', JSON.stringify(userState));
    return userRef.set(userState, {
      merge: true
    })
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }
}