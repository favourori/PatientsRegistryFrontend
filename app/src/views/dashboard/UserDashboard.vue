<template>
  <div class="container-fluid">
    <section>
      <div class="form-head d-flex mb-3 mb-md-4 align-items-start">
        <div class="mr-auto d-none d-lg-block">
          <h3 class="text-black font-w600">Welcome to Eres!</h3>
          <p class="mb-0 fs-18">Hospital Admin Dashboard Template</p>
        </div>
      </div>
    </section>

    <section class="mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">List Of Rare Diseases</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-responsive-md">
                  <thead>
                    <tr>
                      <th class="width80"><strong>S/N</strong></th>
                      <th><strong>Name</strong></th>
                      <th><strong>Synonyms</strong></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>01</strong></td>
                      <td>Mr. Bobby</td>
                      <td>Dr. Jackson</td>
                      <td>
                        <div class="dropdown">
                          <button 
                            type="button" class="btn btn-success light sharp" data-toggle="dropdown">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                          </button>
                          <div class="dropdown-menu">
                            <a 
                              class="dropdown-item" 
                              data-toggle="modal" 
                              data-target="#exampleModalLong"
                            >Edit</a>
                            <a class="dropdown-item" href="#">Join</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <diseases-details />
  </div>
</template>

<script>
import DiseasesDetails from '@/components/modals/DiseaseDetails'
export default {
  components: {
    DiseasesDetails
  }
}
</script>