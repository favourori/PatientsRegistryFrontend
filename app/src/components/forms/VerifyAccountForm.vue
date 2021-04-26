<template>
  <div class="d-flex flex-column w-100">
    <vue-otp-2
      length="4"
      join-character="-"
       @onComplete="chekValidity"
    />
    <!-- submit button -->
    <div class="text-center mt-4 w-100">
      <button type="button" @click="verifyAccount" class="btn btn-primary btn-block">Verify Account</button>
    </div>
  </div>
</template>

<script>
import Auth from '@/services/auth';
export default {
  data() {
    return {
      isDisabled: true,
      verificationCode: ''
    }
  },
  methods: {
    chekValidity(value) {
      this.verificationCode = value.join('')
      console.log(this.verificationCode);
    },
    async verifyAccount() {
      try {
        console.log('here')
        // return
        const { data } = await Auth.ProcessVerifyAccount({verificationCode: this.verificationCode})
        console.log(data)
      }catch(error) {
        console.log*'error'
      }
    }
  }
}
</script>

<style>
  .vue-otp-2 {
    display: flex;
    justify-content: space-between;
    width: 100%
  }
  .vue-otp-2 div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vue-otp-2 div input {
    max-width: 80px !important;
    padding: 10px 8px;
    font-size: 20px;
    border-radius: 3px;
    border: 1px solid #cecece;
    text-align: center;
  }

   .vue-otp-2 div input span {
    display: block;
    flex: 1;
    text-align: center;
  }
</style>
