<script>
  import {Route} from 'svelte-router-spa';
  import SideNavigation from '../components/_shared/SideNavigation.svelte';
  import TopNavigation from '../components/_shared/TopNavigation.svelte';
  import Footer from '../components/_shared/Footer.svelte';

  export let currentRoute;
  export let segment;
  
  let isOpen = true;
  const params = {};

</script>

<div class="flexible-content">
  <TopNavigation />
  <SideNavigation {segment} {isOpen} />
  <div class="px-2 pt-4 p-md-5" id="content">
    <Route {currentRoute}  {params} />
  </div>
  <Footer />
</div>


