<template>
  <TransitionRoot appear :show="modelValue" as="template">
    <Dialog :open="modelValue" as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div class="inline-block w-full max-w-[500px] my-8 overflow-hidden text-left align-middle transition-all transform bg-white border-t-4 border-yellow rounded-lg shadow-xl">
              <DialogTitle as="h3" class="flex justify-between items-center p-4 pt-3 text-2xl font-bold leading-9 text-gray-900 border-b border-[#DEE2E6]">
                <span>登入</span>

                <button
                  type="button"
                  class="text-black transition-colors duration-100 text-opacity-20 hover:text-opacity-40"
                  @click="closeModal"
                >
                  <i-mdi-close class="w-7 h-7" />
                </button>
              </DialogTitle>

              <div class="pt-6 px-4">
                <form
                  ref="form"
                  :class="{ 'was-validated': isValidated }"
                  @submit.prevent.stop="handleSubmit"
                  novalidate
                >
                  <div class="space-y-2 lg:space-y-4">
                    <div>
                      <label for="username">帳號</label>
                      <input type="text" name="username" id="username" required>
                      <div class="form-error">請輸入正確的帳號</div>
                    </div>

                    <div>
                      <label for="password">密碼</label>
                      <input type="password" name="password" id="password" required>
                      <div class="form-error">請輸入正確的密碼</div>
                    </div>
                  </div>

                  <div class="mt-2">
                    <a href="#forgetPassword" class="text-gray-500 hover:text-red text-sm" @click.prevent>
                      忘記密碼？
                    </a>
                  </div>

                  <button type="submit" class="mt-4 btn btn-lg btn-primary w-full py-3 text-xl">
                    登入
                  </button>
                </form>

                <div class="mt-12 mb-8 text-gray-500 text-center text-sm overflow-hidden">
                  <span class="inline-block relative">
                    <div class="absolute top-1/2 right-full w-[200px] h-[1px] mr-4 bg-gray-200"></div>
                    還沒有帳號？ <a href="#register" class="text-red hover:text-light-red" @click.prevent>註冊一個帳號</a>
                    <div class="absolute top-1/2 left-full w-[200px] h-[1px] ml-4 bg-gray-200"></div>
                  </span>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const form = ref(null)
    const isValidated = ref(false)

    function closeModal() {
      emit('update:modelValue', false)
    }

    function handleSubmit() {
      if (!form.value.checkValidity()) {
        isValidated.value = true
      } else {
        location.href = location.href
      }
    }

    return { form, isValidated, closeModal, handleSubmit }
  },
}
</script>
