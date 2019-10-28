import { UserDetailsComponent } from './integration-testing/user-details/user-details.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './integration-testing/users/users.component';
import { HomeComponent } from './integration-testing/home/home.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: ServicesComponent },
  { path: '', component: HomeComponent },
];
