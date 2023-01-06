<template>
  <ul class="space-y-4">
    <Disclosure v-for="faq in faqs" v-slot="{ open }">
      <li class="border border-gray-100" :class="open ? 'shadow-around rounded' : 'rounded-lg'">
        <DisclosureButton class="w-full px-3.5 lg:px-5 py-3 flex justify-between items-center text-left">
          <div class="flex items-center">
            <div class="inline-flex w-7 h-7 justify-center items-center bg-yellow rounded">
              <span class="text-sm font-baloo font-bold tracking-[0.7px]">
                {{ faq.id }}
              </span>
            </div>
            <span class="ml-4 lg:text-sm tracking-[0.8px] lg:tracking-[0.7px]">
              {{ faq.title }}
            </span>
          </div>
          <i-heroicons-solid-chevron-down
            class="inline-block transition-transform"
            :class="open ? '-rotate-180' : 'rotate-0'"
          />
        </DisclosureButton>

        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="scale-95 -translate-y-2 opacity-0"
          enter-to-class="scale-100 translate-y-0 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="scale-100 translate-y-0 opacity-100"
          leave-to-class="scale-95 -translate-y-2 opacity-0"
        >
          <DisclosurePanel class="p-3.5 lg:p-4 lg:pl-16 lg:text-[14px] text-gray-500 tracking-[0.8px] lg:tracking-[0.7px] leading-[27px] border-t border-gray-100">
            {{ faq.content }}
          </DisclosurePanel>
        </transition>
      </li>
    </Disclosure>
  </ul>
</template>

<script setup>
const faqs = [
  {
    id: 'Q1',
    title: '影片拍完之後可以編輯嗎？',
    content: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
  },
  {
    id: 'Q2',
    title: '有提供保固或維修服務嗎？',
    content: '提供產品售後服務，對產品本體(不含配件、線材)提供二年保固服務。產品因意外或人為不當使用或未經授權維修等非依使用手冊使用而造成產品損壞者，則不在保固範圍之內，得向客戶酌收產品維修服務費用。',
  },
  {
    id: 'Q3',
    title: '補充包底片要去哪裡購買呢？',
    content: '本產品可以兼容 i-type 及 600 相片，各大網路平台皆有販售。',
  },
  {
    id: 'Q4',
    title: '印出來的拍立得照片需要充電嗎？',
    content: '不用，取出後稍微搖晃，相片與空氣接觸數秒後便會產生圖像顏色。',
  },
  {
    id: 'Q5',
    title: '運送方式及付款方式有哪些呢？',
    content: '可以選擇超商取貨及宅配，付款方式有銀行轉帳及信用卡支付。',
  },
]
</script>
