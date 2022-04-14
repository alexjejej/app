import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { User } from 'firebase/auth';

import { UserModel } from '../models/user-model';

@Injectable()
export class AuthService {
    user: User;

    constructor(public angularFireAuth: AngularFireAuth) {
        angularFireAuth.authState.subscribe((user: User) => {
            this.user = user;
        });
    }

    get authenticated(): boolean {
        return this.user != null;
    }

    signInWithEmailAndPassword(userModel: UserModel): Promise<any> {
        return this.angularFireAuth.signInWithEmailAndPassword(userModel.email, userModel.password);
    }

    createUserWithEmailAndPassword(userModel: UserModel): Promise<any> {
        return this.angularFireAuth.createUserWithEmailAndPassword(userModel.email, userModel.password);
    }

    signOut(): Promise<any> {
        return this.angularFireAuth.signOut();
    }
}