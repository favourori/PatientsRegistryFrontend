<template>
  <div class="row justify-content-center h-100 align-items-center">
    <div class="col-md-6">
      <div class="authincation-content">
        <div class="row no-gutters">
          <div class="col-xl-12">
            <div class="auth-form">
              <h4 class="text-center mb-4">Sign in your account</h4>
              <login-form />
              <div class="new-account mt-3">
                <p>Don't have an account?
                  <router-link :to="{name: 'register'}">
                    Sign up
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm"
export default {
  components: {
    LoginForm
  },
  async mounted() {
    await this.$api.auth.ProcessPatientRegister({email: '', password: ''})
  }
}
</script>