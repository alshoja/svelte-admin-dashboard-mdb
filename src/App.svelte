<script>
  import {Router} from 'svelte-router-spa';
  import {routes} from './routes';
</script>

<div class="flexible-content">
<Router {routes} />
</div>