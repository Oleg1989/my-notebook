<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-success mx-2 btn-sm"
      data-bs-toggle="modal"
      :data-bs-target="'#changeModal' + id"
    >
      {{ $t('buttons.change') }}
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
              <div class="form-floating">
                <input
                  type="text"
                  v-model="title"
                  class="form-control is-invalid"
                  :id="'floatingText' + id"
                  placeholder="Text"
                  required
                />
                <label :for="'floatingText' + id">{{ $t('labels.inputToDo') }}</label>
                <div
                  v-if="!title.length"
                  :id="'validationServer03Feedback' + id"
                  class="invalid-feedback"
                >
                  {{ $t('validationFeedback.inputText') }}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                {{ $t('buttons.close') }}
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                :disabled="!title.length"
                @click.stop="update()"
              >
                {{ $t('buttons.updateToDo') }}
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
  name: 'my-list-change-button',
  props: {
    id: String,
    inputTitle: String,
    changeButtonTitle: String
  },
  setup(props) {
    const myToDoListsStore = useMyToDoListsStore()

    const title = ref(props.inputTitle)

    const update = () => {
      const element = {
        id: props.id,
        title: title.value
      }
      myToDoListsStore.updateToDo(element)
    }

    return {
      title,
      update
    }
  }
}
</script>
<style></style>
