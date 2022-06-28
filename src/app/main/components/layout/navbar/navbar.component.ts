import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/main/_models/role';
import { User } from 'src/app/main/_models/user';
import { AuthService } from 'src/app/main/_services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user!: User | null;

  constructor(private authService: AuthService) {

    this.authService.userSubject.asObservable().subscribe(data => {
      this.user = data
    })
  }

  get isGuest() {
    return !this.user;
  }

  get isLogged() {
    return this.user ? true : false;
  }

  get isUser() {
    return this.user && this.user.role === Role.User
  }

  get isAdmin() {
    return this.user && this.user.role === Role.Admin
  }


  logout() {
    this.authService.logout();
    this.authService.user?.subscribe(x => {
      if (x)
        this.user = x
    });
  }

  ngOnInit(): void {
  }

}
