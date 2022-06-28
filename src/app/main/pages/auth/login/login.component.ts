import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/main/_services/auth/auth.service';
import { first } from 'rxjs/operators';
import { UserLogin } from 'src/app/main/_models/user';
import { Role } from 'src/app/main/_models/role';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm!: FormGroup;
	loading = false;
	submitted = false;
	error = '';


	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService
	) {
		if (authService.userValue) {
			this.router.navigate(['/home']);
		}
	}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	// convenience getter for easy access to form fields
	get email() {
		return this.loginForm.get("email");
	}

	get password() {
		return this.loginForm.get("password");
	}

	onSubmit() {
		this.submitted = true;
		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
		this.authService.login(
			this.email?.value, this.password?.value
		).subscribe(
			{
				next!: data => {
					if (data.role == Role.User) this.router.navigate(['/home']);
					else if (data.role == Role.Admin) this.router.navigate(['/admin/home']);
					this.loading = false;
				},
				error: err => {
					console.log(err);
					this.error = err;
					this.loading = false;
				}
			}
		);
	}

}
