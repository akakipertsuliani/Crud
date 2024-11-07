import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private screenDivideControl = new BehaviorSubject<string>('0');
  position$ = this.screenDivideControl.asObservable();

  setPosition(position: string) {
    this.screenDivideControl.next(position);
  }

  constructor(private auth: Auth) {}
  
  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signUp(username: string, email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    await updateProfile((userCredential.user), { displayName: username });

    return userCredential;
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  signOut() {
    this.auth.signOut();
  }
}
