import { routes } from './app.route';
import { UsersComponent } from './integration-testing/users/users.component';

describe('routes', () => {
    it('should contain a route for users', () => {
        expect(routes).toContain({ path: 'users', component: UsersComponent});
    });
});
