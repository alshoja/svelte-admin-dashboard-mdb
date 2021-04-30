<script>
  import MDBBtn from 'mdbsvelte/src/MDBBtn.svelte';
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte';
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte';
  import MDBContainer from 'mdbsvelte/src/MDBContainer.svelte';
  import MDBInput from 'mdbsvelte/src/MDBInput.svelte';
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte';
  import {Navigate} from 'svelte-router-spa';
</script>


<MDBContainer fluid>
  <MDBRow>
    <div class="container">
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
            <Navigate to="home"><MDBBtn color="primary">Login</MDBBtn></Navigate
            >
          </div>
        </MDBCard>
      </MDBCol>
    </div>
  </MDBRow>
</MDBContainer>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
</style>
