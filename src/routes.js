import Layout from './components/_layout.svelte';
import Dashboard from './components/pages/dashboard.svelte';
import Login from './components/pages/login.svelte';
import Profile from './components/pages/profile.svelte';
import Table from './components/pages/tables.svelte';
import Forms from './components/pages/forms.svelte';
import _404 from './components/pages/_404.svelte';

function userIsAdmin() {
  return true;
}

const routes = [
  {
    name: '/',
    component: Login
  },
  {
    name: 'home',
    component: Dashboard,
    layout: Layout,
    onlyIf: {
      guard: userIsAdmin,
      redirect: '/'
    }
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
  },
  {
    name: '404',
    path: '404',
    component: _404
  }
];

export {routes};
