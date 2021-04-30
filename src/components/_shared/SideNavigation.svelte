<script>
  export let segment;
  export let isOpen = true;

  import MDBListGroup from 'mdbsvelte/src/MDBListGroup.svelte';
  import MDBListGroupItem from 'mdbsvelte/src/MDBListGroupItem.svelte';
  import MDBIcon from 'mdbsvelte/src/MDBIcon.svelte';
  import MDBNavLink from 'mdbsvelte/src/MDBNavLink.svelte';
  import {Navigate} from 'svelte-router-spa';
</script>

{#if isOpen}
  <div class="sidebar-fixed position-fixed">
    <a href="#!" class="logo-wrapper waves-effect">
      <img alt="MDB React Logo" class="img-fluid" src="mdbsvelte.png" />
    </a>
    <MDBListGroup class="list-group-flush">
      <MDBNavLink active={segment === undefined} activeClassName="activeClass">
        <Navigate to="home">
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" class="mr-3" />
            <span>Dashboard</span>
          </MDBListGroupItem>
        </Navigate>
      </MDBNavLink>

      <MDBNavLink
        active={segment === 'tables'}
        activeClassName="activeClass">
        <Navigate to="table">
          <MDBListGroupItem>
            <MDBIcon icon="table" class="mr-3" />
            <span>Tables</span>
          </MDBListGroupItem>
        </Navigate>
      </MDBNavLink>

      <MDBNavLink
      active={segment === 'forms'}
      activeClassName="activeClass">
      <Navigate to="forms">
        <MDBListGroupItem>
          <MDBIcon icon="file" class="mr-3" />
          <span>Forms</span>
        </MDBListGroupItem>
      </Navigate>
    </MDBNavLink>
    <MDBNavLink
    active={segment === 'forms'}
    activeClassName="activeClass">
    <Navigate to="profile">
      <MDBListGroupItem>
        <MDBIcon icon="user" class="mr-3" />
        <span>Profile</span>
      </MDBListGroupItem>
    </Navigate>
  </MDBNavLink>
  
    </MDBListGroup>
  </div>
{/if}
