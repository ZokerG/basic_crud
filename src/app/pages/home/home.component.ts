import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  user: Array<any> = [];
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit'];
    dataSource: Array<any> = [];
  
    constructor(
      private router: Router,
      private userService: UserService,
      private matDialog: MatDialog
    ) {
     }
  
    ngOnInit(): void {
      this.findAll();
    }

    findAll(){
      this.userService.findAll().subscribe({
        next: (response: any) => {
          this.user = response;
          this.dataSource = this.user;
          console.log(this.user);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }

    openDialog(user: any){
      this.matDialog.open(UsersComponent, {
        data: user,
        width: '600px',
        height: '500px'
      })
    }

    signOut(){
      this.router.navigate(['/security/sign-in']);
    }

}
