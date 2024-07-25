<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modalNote"
    >
      {{ $t('buttons.newNote') }}
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalNote"
      tabindex="-1"
      aria-labelledby="modalLabelNote"
      aria-hidden="true"
      @click="reset()"
    >
      <div @click.stop class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabelNote">{{ $t('formTitle.newNote') }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="reset()"
            ></button>
          </div>
          <form class="was-validated">
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  ref="input"
                  v-model="title"
                  type="text"
                  class="form-control is-invalid"
                  id="floatingTitle"
                  placeholder="Title"
                  required
                />
                <label for="floatingTitle">{{ $t('labels.inputNoteTitle') }}</label>
                <div v-if="!title.length" id="validationServer03Feedback" class="invalid-feedback">
                  {{ $t('validationFeedback.inputText') }}
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  v-model="text"
                  class="form-control is-invalid"
                  placeholder="Description note"
                  aria-label="Description note"
                  id="floatingTextarea2"
                  :style="text.length ? largeSize : smallSize"
                  required
                ></textarea>
                <label for="floatingTextarea2">{{ $t('labels.inputNote') }}</label>
                <div v-if="!text.length" id="validationServer03Feedback" class="invalid-feedback">
                  {{ $t('validationFeedback.inputText') }}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="reset()"
              >
                {{ $t('buttons.close') }}
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                :disabled="!title.length || !text.length"
                @click="createNote"
              >
                {{ $t('buttons.addNode') }}
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
import { ref, onMounted } from 'vue'

export default {
  name: 'my-modal-form-note',
  setup() {
    const myNotesStore = useMyNotesStore()

    const title = ref('')
    const text = ref('')
    const input = ref(null)

    const largeSize = ref({
      height: 200 + 'px'
    })
    const smallSize = ref({
      height: 100 + 'px'
    })

    const reset = () => {
      title.value = ''
      text.value = ''
    }

    const createNote = () => {
      const newNote = {
        title: title.value,
        text: text.value
      }
      myNotesStore.addNote(newNote)
      reset()
    }

    onMounted(() => {
      const myModalEl = document.getElementById('modalNote')
      myModalEl.addEventListener('shown.bs.modal', function () {
        input.value.focus()
      })
    })

    return {
      title,
      text,
      input,
      largeSize,
      smallSize,
      myNotesStore,
      createNote,
      reset
    }
  }
}
</script>
<style></style>
