import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private screenDivideControl = new BehaviorSubject<boolean>(false);
  position$ = this.screenDivideControl.asObservable();

  setPosition(position: boolean) {
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

  signOut() {
    this.auth.signOut();
  }
}
