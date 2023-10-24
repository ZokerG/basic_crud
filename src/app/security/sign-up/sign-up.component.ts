import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
    ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit(): void {
  }

  register(){
    this.userService.signUp(this.registrationForm.value).subscribe({
      next: (response: any) => {
        this.alertService.showAlert('success', 'User registered successfully');
        this.router.navigate(['/security/sign-in']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
