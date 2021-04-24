<template>
 <div class="row justify-content-center h-100 align-items-center">
    <div class="col-md-6">
      <div class="authincation-content">
        <div class="row no-gutters">
          <div class="col-xl-12">
            <div class="auth-form">
              <h4 class="text-center mb-4">Verify your account</h4>
              <verify-account-form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerifyAccountForm from "@/components/forms/VerifyAccountForm"
export default {
  components: {
    VerifyAccountForm
  }
}
</script>