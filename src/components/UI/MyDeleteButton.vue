<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-danger mx-2 btn-sm"
      data-bs-toggle="modal"
      :data-bs-target="'#deleteModal' + id"
    >
      Delete
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'deleteModal' + id"
      tabindex="-1"
      :aria-labelledby="'deleteModalLabel' + id"
      aria-hidden="true"
    >
      <div @click.stop class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title" :id="'deleteModalLabel' + id">
              {{ deleteButtonTitle }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              @click="deleteElement(id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-delete-button',
  props: {
    id: String,
    deleteButtonTitle: String,
    deleteElement: Function
  }
}
</script>
<style></style>
