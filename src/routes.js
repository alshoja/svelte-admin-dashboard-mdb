import PublicLayout from './components/public_layout.svelte'
import index from './components/index.svelte'
import Login from './components/login.svelte'

function userIsAdmin() {
  //check if user is admin and returns true or false
}

const routes = [
  {
    name: '/',
    component: Login,
  },
  { name: 'login', component: index, layout: PublicLayout },
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
]

export { routes }