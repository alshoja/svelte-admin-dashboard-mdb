<script>
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte';
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte';
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte';
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte';
  import MDBIcon from 'mdbsvelte/src/MDBIcon.svelte';
  import MDBInput from 'mdbsvelte/src/MDBInput.svelte';
  import MDBBtn from 'mdbsvelte/src/MDBBtn.svelte';
</script>

<MDBRow>
  <MDBCol md="6">
    <MDBCard class="p-5">
      <p class="h5 text-center mb-4">Login</p>
      <div class="grey-text">
        <MDBInput
          label="Your email"
          icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
        />

        <MDBInput
          label="Your password"
          icon="lock"
          group
          type="password"
          validate
        />
      </div>
      <div class="text-center">
        <MDBBtn color="primary">Login</MDBBtn>
      </div>
    </MDBCard>
  </MDBCol>
</MDBRow>

<style>
</style>
