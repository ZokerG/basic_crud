import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/service/alert.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private fb: FormBuilder,
  private userService: UserService,
  private alertService: AlertService) {
    this.userForm = this.fb.group({
      name: [data.name],
      lastName: [data.lastName],
      email: [data.email],
      password: [data.password],
    });
   }

  ngOnInit(): void {}

  updateUser(id: any){
    this.userService.update(id ,this.userForm.value).subscribe({
      next: (response: any) => {
        this.alertService.showAlert('success', 'User updated successfully');
      },
      error: (error: any) => {
        this.alertService.showAlert('danger', 'Error updating user');
      }
    });
  }

  deleteUser(id: any){
    this.userService.delete(id).subscribe({
      next: (response: any) => {
        this.alertService.showAlert('success', 'User deleted successfully');
      },
      error: (error: any) => {
        this.alertService.showAlert('danger', 'Error deleting user');
      }
    });
  }
}
