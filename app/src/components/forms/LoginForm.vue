<template>
  <form>
    <div class="form-group">
      <label class="mb-1">
        <strong>Email</strong>
      </label>
      <input type="email" class="form-control" value="hello@example.com">
    </div>
    <div class="form-group">
      <label class="mb-1">
        <strong>Password</strong>
      </label>
      <input type="password" class="form-control" value="Password">
    </div>
    <div class="form-row d-flex justify-content-between mt-4 mb-2">
      <div class="form-group">
        <div class="custom-control custom-checkbox ml-1">
          <input type="checkbox" class="custom-control-input" id="basic_checkbox_1">
          <label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
        </div>
      </div>
      <div class="form-group">
        <a href="page-forgot-password.html">Forgot Password?</a>
      </div>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
    </div>
  </form>
</template>
