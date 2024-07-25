<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modalList"
    >
      {{ $t('buttons.newToDo') }}
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalList"
      tabindex="-1"
      aria-labelledby="modalLabelList"
      aria-hidden="true"
      @click="() => (title = '')"
    >
      <div @click.stop class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabelList">{{ $t('formTitle.newToDo') }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="() => (title = '')"
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
                  ref="input"
                />
                <label for="floatingText">{{ $t('labels.inputToDo') }}</label>
                <div v-if="!title.length" id="validationServer03Feedback" class="invalid-feedback">
                  {{ $t('validationFeedback.inputText') }}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="() => (title = '')"
              >
                {{ $t('buttons.close') }}
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                :disabled="!title.length"
                @click="createToDo"
              >
                {{ $t('buttons.addToDo') }}
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
import { ref, onMounted } from 'vue'
export default {
  name: 'my-modal-form-list',
  setup() {
    const myToDoListsStore = useMyToDoListsStore()

    const title = ref('')
    const input = ref(null)

    const createToDo = () => {
      myToDoListsStore.addToDo(title.value)
      title.value = ''
    }

    onMounted(() => {
      const myModalEl = document.getElementById('modalList')
      myModalEl.addEventListener('shown.bs.modal', function () {
        input.value.focus()
      })
    })
    return {
      title,
      input,
      myToDoListsStore,
      createToDo
    }
  }
}
</script>
<style></style>
