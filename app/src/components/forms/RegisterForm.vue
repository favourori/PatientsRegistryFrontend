<template>
  <form @submit.prevent="registerUser()">
    <!-- first name and last name -->
    <div class="row">
      <!-- first name -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>First Name</strong>
          </label>
          <input type="text" v-model="reg.firstname" class="form-control">
        </div>
      </div>

      <!-- last name -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Last Name</strong>
          </label>
          <input type="text" v-model="reg.lastname" class="form-control">
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
          <input type="email" v-model="reg.email" class="form-control">
        </div>
      </div>
      <!-- phone number -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Phone Number</strong>
          </label>
          <input type="text" v-model="reg.phone" class="form-control">
        </div>
      </div>
    </div>

    <!-- country -->
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Country</strong>
          </label>
          <country-select className="form-control" v-model="country" countryName :country="country" topCountry="US" />
        </div>
      </div>
      <!-- password -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Password</strong>
          </label>
          <input type="password" class="form-control" v-model="reg.password">
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
          <input type="date" class="form-control" v-model="reg.dob">
        </div>
      </div>
      <!-- address -->
      <div class="col-md-6">
        <div class="form-group">
          <label class="mb-1">
            <strong>Address</strong>
          </label>
          <input type="text" class="form-control" v-model="reg.address">
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
import Auth from '@/services/auth';
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      reg: {},
      country: ''
    }
  },
  methods: {
    async registerUser() {
      try {
        const { data, status , message } = await Auth.ProcessPatientRegister({...this.reg, country: this.country})
        if(status === 201) {
          this.$notify({
           title: message,
            type: 'success'
          }); 
          this.$router.push({name: 'verifyAccount'})
        }
      }catch(error) {
        console.log(error)
      }
    }
  },
  validations: {
    reg: {
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11)
      },
    }
  }
}
</script>