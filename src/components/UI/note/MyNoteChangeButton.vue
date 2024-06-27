<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-success mx-2 btn-sm"
      data-bs-toggle="modal"
      :data-bs-target="'#changeModal' + id"
    >
      Change
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'changeModal' + id"
      tabindex="-1"
      :aria-labelledby="'changeModalLabel' + id"
      aria-hidden="true"
    >
      <div @click.stop class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="'changeModalLabel' + id">{{ changeButtonTitle }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form class="was-validated">
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  v-model="title"
                  class="form-control is-invalid"
                  :id="'floatingText' + id"
                  placeholder="Text"
                  required
                />
                <label :for="'floatingText' + id">Title</label>
                <div
                  v-if="!title.length"
                  :id="'validationServer03Feedback' + id"
                  class="invalid-feedback"
                >
                  Please fill in the field!
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  v-model="text"
                  class="form-control is-invalid"
                  placeholder="Description note"
                  :id="'floatingTextarea2' + id"
                  :style="text.length ? largeSize : smallSize"
                  required
                ></textarea>
                <div
                  v-if="!text.length"
                  :id="'validationServer03Feedback' + id"
                  class="invalid-feedback"
                >
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
                @click.stop="update()"
              >
                Update note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useMyNotesStore } from '@/stores/myNotesStore'
import { ref } from 'vue'

export default {
  name: 'my-note-change-button',
  props: {
    id: String,
    inputTitle: String,
    inputText: String,
    changeButtonTitle: String
  },
  setup(props) {
    const myNotesStore = useMyNotesStore()

    const title = ref(props.inputTitle)
    const text = ref(props.inputText)
    const largeSize = ref({
      height: 200 + 'px'
    })
    const smallSize = ref({
      height: 100 + 'px'
    })

    const update = () => {
      const element = {
        id: props.id,
        title: title.value,
        text: text.value
      }
      myNotesStore.updateNote(element)
    }

    return {
      title,
      text,
      largeSize,
      smallSize,
      update
    }
  }
}
</script>
<style></style>
