<template>
  <VeeForm v-slot="{ handleSubmit }" as="div">
    <form @submit="handleSubmit($event, onSubmit)">
      <img class="mx-auto" src="../assets/icon_heart.svg" alt="贊助專案 icon">
      <h2 class="mt-2.5 text-xl lg:text-2xl text-center tracking-[1.6px] font-bold overflow-hidden">
        <span class="inline-block relative">
          <div class="absolute top-1/2 right-full w-[1000px] h-[3px] mr-3 bg-yellow transform -translate-y-1/2"></div>
          贊助專案
          <div class="absolute top-1/2 left-full w-[1000px] h-[3px] ml-3 bg-yellow transform -translate-y-1/2"></div>
        </span>
      </h2>

      <div class="mt-4 lg:mt-6 space-y-2 lg:space-y-4">
        <VeeField name="plan" :rules="isRequired" v-slot="{ field, errors }">
          <div>
            <label for="plan">贊助方案</label>
            <select name="plan" id="plan" class="mt-2" :class="errorClass(errors)" v-bind="field">
              <option value="">請選擇一個方案</option>
              <option value="1">方案1</option>
              <option value="2">方案2</option>
            </select>
            <div v-if="errors.length" class="form-error">請選擇一個贊助方案</div>
          </div>
        </VeeField>

        <VeeField name="name" :rules="isRequired" v-slot="{ field, errors }">
          <div>
            <label for="name">收件人姓名</label>
            <input type="text" name="name" id="name" class="mt-2" :class="errorClass(errors)" v-bind="field">
            <div v-if="errors.length" class="form-error">請輸入正確的收件人姓名</div>
          </div>
        </VeeField>

        <VeeField name="phone" :rules="isRequired" v-slot="{ field, errors }">
          <div>
            <label for="phone">聯絡電話</label>
            <input type="tel" name="phone" id="phone" class="mt-2" :class="errorClass(errors)" v-bind="field">
            <div v-if="errors.length" class="form-error">請輸入正確的電話號碼</div>
          </div>
        </VeeField>

        <VeeField name="email" :rules="isRequired" v-slot="{ field, errors }">
          <div>
            <label for="email">聯絡信箱</label>
            <input type="email" name="email" id="email" class="mt-2" :class="errorClass(errors)" v-bind="field">
            <div v-if="errors.length" class="form-error">請輸入正確的郵件格式</div>
          </div>
        </VeeField>

        <VeeField name="payment" :rules="isRequired" v-slot="{ field, errors }">
          <div>
            <label for="payment">付款方式</label>
            <select name="payment" id="payment" class="mt-2" :class="errorClass(errors)" v-bind="field">
              <option value="">請選擇一個付款方式</option>
              <option value="transfer">銀行轉帳</option>
              <option value="credit">信用卡付款</option>
            </select>
            <div v-if="errors.length" class="form-error">請選擇一種付款方式</div>
          </div>
        </VeeField>
      </div>

      <button class="mt-6 mx-auto btn btn-lg btn-primary w-full lg:w-auto lg:px-12 lg:py-3 text-base lg:text-xl" type="submit">
        贊助專案
      </button>
    </form>
  </VeeForm>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      location.href = location.href
    },
    isRequired(value) {
      return value && value.trim() ? true : 'This is required';
    },
    errorClass(errors) {
      return errors.length ? 'form-control-error' : ''
    },
  },
}
</script>
