<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-success mx-2 btn-sm"
      data-bs-toggle="modal"
      data-bs-target="#changeModal"
    >
      Change
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="changeModal"
      tabindex="-1"
      aria-labelledby="changeModalLabel"
      aria-hidden="true"
    >
      <div @click.stop class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="changeModalLabel">{{ changeButtonTitle }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form class="was-validated">
            <div class="modal-body">
              <div class="form-floating">
                <input
                  type="text"
                  v-model="title"
                  class="form-control is-invalid"
                  id="floatingText"
                  placeholder="Text"
                  required
                />
                <label for="floatingText">Description to-do</label>
                <div v-if="!title.length" id="validationServer03Feedback" class="invalid-feedback">
                  Please fill in the field!
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                :disabled="!title.length"
                @click="update(id)"
              >
                Update to-do
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useMyToDoListsStore } from '@/stores/myToDoListsStore'
import { ref } from 'vue'

export default {
  name: 'my-change-button',
  props: {
    id: String,
    changeButtonTitle: String
  },
  setup(props) {
    const myToDoListsStore = useMyToDoListsStore()
    const toDo = myToDoListsStore.getToDo(props.id)

    const title = ref(toDo.title)

    const update = (id) => {
      toDo.title = title.value
      myToDoListsStore.updateToDo(id)
      title.value = ''
    }

    return {
      title,
      myToDoListsStore,
      update
    }
  }
}
</script>
<style></style>
