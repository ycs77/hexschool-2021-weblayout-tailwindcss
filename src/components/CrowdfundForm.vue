<template>
  <form @submit.prevent>
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
        <label>贊助方案</label>
        <select class="mt-2">
          <option>請選擇一個方案</option>
          <option value="1">方案1</option>
          <option value="2">方案2</option>
        </select>
      </div>

      <div>
        <label>收件人姓名</label>
        <input class="mt-2" type="text">
      </div>

      <div>
        <label>聯絡電話</label>
        <input class="mt-2" type="tel">
      </div>

      <div>
        <label>聯絡信箱</label>
        <input class="mt-2" type="email">
      </div>

      <div>
        <label>付款方式</label>
        <select class="mt-2">
          <option>請選擇一個付款方式</option>
          <option value="credit">信用卡付款</option>
          <option value="COD">貨到付款</option>
        </select>
      </div>
    </div>

    <button class="mt-6 mx-auto btn btn-lg btn-primary w-full lg:w-auto lg:px-12 lg:py-3 text-base lg:text-xl" type="submit">
      贊助專案
    </button>
  </form>
</template>
