import Layout from './components/_layout.svelte';
import Dashboard from './components/pages/dashboard.svelte';
import Login from './components/pages/login.svelte';
import Profile from './components/pages/profile.svelte';
import Table from './components/pages/tables.svelte';
import Forms from './components/pages/forms.svelte';

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
    layout: Layout
  },
  {
    name: 'forms',
    component: Forms,
    layout: Layout
  },
  {
    name: 'table',
    component: Table,
    layout: Layout
  },
  {
    name: 'profile',
    component: Profile,
    layout: Layout
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
