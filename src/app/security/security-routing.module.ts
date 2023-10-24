import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SecurityComponent } from "./security.component";

const routes: Routes = [
    {
      path: '',
      component: SecurityComponent,
      children: [
        {
          path: 'sign-in',
          component: SignInComponent
        },
        {
          path: 'sign-up',
          component: SignUpComponent
        },
        {
            path: '**',
            redirectTo: 'sign-in'
            
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SecurityRoutingModule { }