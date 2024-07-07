<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modalGoal"
    >
      New goal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalGoal"
      tabindex="-1"
      aria-labelledby="modalLabelGoal"
      aria-hidden="true"
      @click="reset"
    >
      <div @click.stop class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabelGoal">New goal</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="reset"
            ></button>
          </div>
          <form class="was-validated">
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  v-model="date"
                  type="datetime-local"
                  class="form-control is-invalid"
                  id="floatingDateTimeLocal"
                  placeholder="Datetime local"
                  required
                />
                <div v-if="!date.length" id="validationServer03Feedback" class="invalid-feedback">
                  Please select a date!
                </div>
              </div>
              <div class="form-floating">
                <input
                  ref="input"
                  v-model="title"
                  type="text"
                  class="form-control is-invalid"
                  id="floatingGoal"
                  placeholder="Goal"
                  required
                />
                <label for="floatingGoal">Description goal</label>
                <div v-if="!title.length" id="validationServer03Feedback" class="invalid-feedback">
                  Please fill in the field!
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="reset"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                :disabled="!title.length || !date.length"
                @click="createGoal"
              >
                Add goal
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
import { ref, onMounted } from 'vue'

export default {
  name: 'my-modal-form-goal',
  setup() {
    const myGoalsStore = useMyGoalsStore()

    const title = ref('')
    const date = ref('')
    const input = ref(null)

    const reset = () => {
      title.value = ''
      date.value = ''
    }

    const createGoal = () => {
      const newGoal = {
        title: title.value,
        date: date.value
      }
      myGoalsStore.addGoal(newGoal)
      reset()
    }

    onMounted(() => {
      const myModalEl = document.getElementById('modalGoal')
      myModalEl.addEventListener('shown.bs.modal', function () {
        input.value.focus()
      })
    })

    return {
      title,
      date,
      input,
      myGoalsStore,
      createGoal,
      reset
    }
  }
}
</script>
<style></style>
