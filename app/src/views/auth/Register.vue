<template>
  <div class="row justify-content-center h-100 align-items-center">
    <div class="col-md-9">
      <div class="authincation-content">
        <div class="row no-gutters">
          <div class="col-xl-12">
            <div class="auth-form">
              <h4 class="text-center mb-4">Sign up your account</h4>
              <register-form />
              <div class="new-account mt-3">
                <p>Already have an account?
                  <router-link :to="{name: 'login'}">
                    Sign in
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
import RegisterForm from "@/components/forms/RegisterForm"
export default {
  components: {
    RegisterForm
  }
}
</script>