<script>
  import SideNavigation from "../src/components/core/SideNavigation.svelte";
  import TopNavigation from "../src/components/core/TopNavigation.svelte";
  import Footer from "./components/core/Footer.svelte";
  import Index from "../src/components/index.svelte";

  let isOpen = true;
  export let segment;
</script>

<style>
  /* .active {
    margin-left: 250px;
  }
  .content {
    width: 100%;
    transition: 0.5s margin cubic-bezier(0.22, 1, 0.36, 1);
  } */
</style>

<div class="flexible-content">
  <TopNavigation />
  <SideNavigation {segment} {isOpen} />
  <div class="px-2 pt-4 p-md-5" id="content">
    <!-- <slot /> -->
    <Index/>
  </div>
  <Footer />
</div>
