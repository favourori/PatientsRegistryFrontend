<template>
  <form>
    <!-- first name and last name -->
    <div class="row">
      <!-- first name -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>First Name</strong>
          </label>
          <input type="text" class="form-control">
        </div>
      </div>

      <!-- last name -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Last Name</strong>
          </label>
          <input type="text" class="form-control">
        </div>
      </div>
    </div>

    <!-- email and phone number -->
    <div class="row">
      <!-- email -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Email</strong>
          </label>
          <input type="email" class="form-control" value="hello@example.com">
        </div>
      </div>
      <!-- phone number -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Phone Number</strong>
          </label>
          <input type="text" class="form-control">
        </div>
      </div>
    </div>

    <!-- country -->
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label class="mb-1">
            <strong>Country</strong>
          </label>
          <country-select className="form-control" v-model="country" :country="country" topCountry="US" />
        </div>
      </div>
    </div>

    <!-- password and confirm password -->
    <div class="row">
      <!-- password -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Password</strong>
          </label>
          <input type="password" class="form-control" value="hello@example.com">
        </div>
      </div>

      <!-- confirm password -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Confirm Password</strong>
          </label>
          <input type="password" class="form-control" value="hello@example.com">
        </div>
      </div>
    </div>

    <!-- date of birth and address -->
    <div class="row">
      <!-- date of birth -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Date of Birth</strong>
          </label>
          <input type="date" class="form-control">
        </div>
      </div>
      <!-- address -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Address</strong>
          </label>
          <input type="text" class="form-control" value="hello@example.com">
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-between mt-4 mb-2">
      <div class="form-group">
        <div class="custom-control custom-checkbox ml-1">
          <input type="checkbox" class="custom-control-input" id="basic_checkbox_1">
          <label class="custom-control-label" for="basic_checkbox_1">Agree to terms and conditions</label>
        </div>
      </div>
      <div class="form-group">
        <a href="page-forgot-password.html">Terms and Conditions</a>
      </div>
    </div>

    <!-- submit button -->
    <div class="text-center">
      <button type="submit" class="btn btn-primary btn-block">Sign me Up</button>
    </div>
 
  </form>
</template>

<script>
export default {
  data: () => ({
    country: '',
  })
}
</script>