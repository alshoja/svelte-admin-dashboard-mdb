import PublicLayout from './components/public_layout.svelte';
import Dashboard from './components/dashboard.svelte';
import Login from './components/login.svelte';
import Profile from './components/profile.svelte';
import Table from './components/tables.svelte';
import Forms from './components/forms.svelte';

function userIsAdmin() {
  //check if user is admin and returns true or false
}

const routes = [
  {
    name: '/',
    component: Login
  },
  {
    name: 'home',
    component: Dashboard,
    layout: PublicLayout
  },
  {
    name: 'forms',
    component: Forms,
    layout: PublicLayout
  },
  {
    name: 'table',
    component: Table,
    layout: PublicLayout
  },
  {
    name: 'profile',
    component: Profile,
    layout: PublicLayout
  }

  // {
  //   name: 'admin',
  //   component: AdminLayout,
  //   onlyIf: { guard: userIsAdmin, redirect: '/login' },
  //   nestedRoutes: [
  //     { name: 'index', component: AdminIndex },
  //     {
  //       name: 'employees',
  //       component: '',
  //       nestedRoutes: [
  //         { name: 'index', component: EmployeesIndex },
  //         { name: 'show/:id', component: EmployeesShow },
  //       ],
  //     },
  //   ],
  // },
];

export {routes};
