<template>
  <form
    ref="form"
    :class="{ 'was-validated': isValidated }"
    @submit.prevent.stop="handleSubmit"
    novalidate
  >
    <img class="mx-auto" src="../assets/icon_heart.svg" alt="贊助專案 icon">
    <h2 class="mt-2.5 text-xl lg:text-2xl text-center tracking-[1.6px] font-bold overflow-hidden">
      <span class="inline-block relative">
        <div class="absolute top-1/2 right-full w-[1000px] h-[3px] mr-3 bg-yellow transform -translate-y-1/2"></div>
        贊助專案
        <div class="absolute top-1/2 left-full w-[1000px] h-[3px] ml-3 bg-yellow transform -translate-y-1/2"></div>
      </span>
    </h2>

    <div class="mt-4 lg:mt-6 space-y-2 lg:space-y-4">
      <div>
        <label for="plan">贊助方案</label>
        <select name="plan" id="plan" required>
          <option value="">請選擇一個方案</option>
          <option value="1">方案1</option>
          <option value="2">方案2</option>
        </select>
        <div class="form-error">請選擇一個贊助方案</div>
      </div>

      <div>
        <label for="name">收件人姓名</label>
        <input type="text" name="name" id="name" required>
        <div class="form-error">請輸入正確的收件人姓名</div>
      </div>

      <div>
        <label for="phone">聯絡電話</label>
        <input type="tel" name="phone" id="phone" required>
        <div class="form-error">請輸入正確的電話號碼</div>
      </div>

      <div>
        <label for="email">聯絡信箱</label>
        <input type="email" name="email" id="email" required>
        <div class="form-error">請輸入正確的郵件格式</div>
      </div>

      <div>
        <label for="payment">付款方式</label>
        <select name="payment" id="payment" required>
          <option value="">請選擇一個付款方式</option>
          <option value="transfer">銀行轉帳</option>
          <option value="credit">信用卡付款</option>
        </select>
        <div class="form-error">請選擇一種付款方式</div>
      </div>
    </div>

    <button class="mt-6 mx-auto btn btn-lg btn-primary w-full lg:w-auto lg:px-12 lg:py-3 text-base lg:text-xl" type="submit">
      贊助專案
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isValidated: false,
    }
  },
  methods: {
    handleSubmit() {
      if (!this.$refs.form.checkValidity()) {
        this.isValidated = true
      } else {
        location.href = location.href
      }
    },
  },
}
</script>
