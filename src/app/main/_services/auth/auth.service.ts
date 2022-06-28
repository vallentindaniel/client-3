import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserLogin } from '../../_models/user';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public userSubject: BehaviorSubject<User | null> =  new BehaviorSubject<User | null>(null);
	public user!: Observable<User | null>;

	constructor(
		private router: Router,
		private http: HttpClient) {
		const _localStorageItem = localStorage.getItem('user');
		if (_localStorageItem) {
			this.userSubject = new BehaviorSubject<User | null>(JSON.parse(_localStorageItem));
			if (this.userSubject)
				this.user = this.userSubject.asObservable();
		}
	}

	public get userValue() {
		return this.userSubject ? this.userSubject.value : undefined;
	}

	register(username: string, password: string) {
		return this.http.post<any>(`${environment.apiUrl}/register`, { username, password })
			.pipe(map(user => {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('user', JSON.stringify(user));
				this.userSubject.next(user);
				return user;
			}));
	}

	login(email: string, password: string) {

		const userLogin: UserLogin = new UserLogin(email, password);

		return this.http.post<User>(`${environment.apiUrl}/login`, userLogin)
			.pipe(
				map(user => {
					localStorage.setItem('user', JSON.stringify(user));
					this.userSubject.next(user);
					return user;
				})
			);
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('user');
		this.userSubject.next(null);
		this.router.navigate(['/login']);
	}

}
