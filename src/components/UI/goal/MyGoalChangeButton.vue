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
                  v-model="date"
                  type="datetime-local"
                  class="form-control is-invalid"
                  :id="'floatingDateTimeLocal' + id"
                  placeholder="Datetime local"
                  required
                />
                <div v-if="!date.length" id="validationServer03Feedback" class="invalid-feedback">
                  Please select a date!
                </div>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  v-model="title"
                  class="form-control is-invalid"
                  :id="'floatingText' + id"
                  placeholder="Text"
                  required
                />
                <label :for="'floatingText' + id">Description goal</label>
                <div
                  v-if="!title.length"
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
                Update goal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useMyGoalsStore } from '@/stores/myGoalsStore'
import { ref } from 'vue'

export default {
  name: 'my-goal-change-button',
  props: {
    id: String,
    inputDate: String,
    inputTitle: String,
    changeButtonTitle: String
  },
  setup(props) {
    const myGoalsStore = useMyGoalsStore()

    const date = ref(props.inputDate)
    const title = ref(props.inputTitle)

    const update = () => {
      const element = {
        id: props.id,
        date: date.value,
        title: title.value
      }
      myGoalsStore.updateGoal(element)
    }

    return {
      date,
      title,
      update
    }
  }
}
</script>
<style></style>
