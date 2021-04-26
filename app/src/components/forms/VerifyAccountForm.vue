<template>
  <div class="d-flex flex-column w-100">
    <vue-otp-2
      length="4"
      join-character="-"
    />
    <!-- submit button -->
    <div class="text-center mt-4 w-100">
      <button type="submit" class="btn btn-primary btn-block">Verify Account</button>
    </div>
  </div>
</template>

<style scoped>
  .vue-otp-2 {
    display: flex;
    justify-content: space-between;
    width: 100%
  }
  div {
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

  span {
    display: block;
    flex: 1;
    text-align: center;
  }
</style>
