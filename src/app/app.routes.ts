import { Route } from '@angular/router';
import { AuthGuard } from './core/config/auth.guard';
import { UserLoggedInGuard } from './core/config/user-loggedin.guard';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./feature/login/views/login.component').then(
        (m) => m.LoginComponent
      ),
    canActivate: [UserLoggedInGuard],
  },
  {
    path: 'app',
    loadComponent: () => import('./feature/layout/views/layout.component'),
    children: [
      {
        path: 'cat-facts',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('./feature/cat-facts/views/cat-facts.component'),
      },
      { path: '', redirectTo: 'cat-facts', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
