import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile.component';
import { RegisterComponent } from './register/register.component';

export const userRoutes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
