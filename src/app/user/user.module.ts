import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(userRoutes)],
})
export class UserModule {}