<template>
  <div class="bg-gray-50 pt-4 lg:pt-12 pb-8">
    <div class="container">
      <div>
        <span class="px-4 py-0.5 bg-gray-500 text-white text-xs leading-[18px] rounded">魔法科技</span>
      </div>

      <h1 class="mt-2 lg:mt-1 text-gray-700 text-2xl lg:text-[32px] leading-[36px] lg:leading-[47px] font-bold tracking-[2.25px] lg:tracking-[3px]">
        拍出會動的照片｜LivePhotos 魔法拍立得
      </h1>

      <div class="mt-4 lg:mt-6 grid lg:grid-cols-12 gap-4 lg:gap-6">
        <div class="lg:col-span-7">
          <img src="@/assets/produt_image.jpg" alt="產品圖片">
        </div>

        <div class="lg:col-span-5">
          <div class="text-gray-600 text-sm">
            目標 <span class="font-baloo">$600,000</span>
          </div>
          <div class="text-gray-700 text-[32px] leading-[56px] font-baloo font-semibold">
            $280,047
          </div>

          <div class="h-4 bg-[#EEEEEE] rounded-full overflow-hidden">
            <div class="bg-yellow flex justify-center" style="width: 41%">
              <span class="text-sm text-gray-500 font-baloo font-semibold">41%</span>
            </div>
          </div>

          <div class="mt-2 lg:mt-5 grid grid-cols-2">
            <div>
              <div class="text-sm text-gray-600">贊助人數</div>
              <div class="text-gray-700">
                <span class="text-[32px] leading-[56px] font-baloo font-semibold">1374</span>
                <span class="text-2xl leading-[56px] font-bold"> 人</span>
              </div>
            </div>
            <div>
              <div class="text-sm text-gray-600">募資倒數</div>
              <div class="text-gray-700">
                <span class="text-[32px] leading-[56px] font-baloo font-semibold">27</span>
                <span class="text-2xl leading-[56px] font-bold"> 天</span>
              </div>
            </div>
          </div>

          <div class="lg:mt-2 flex h-9 space-x-5 overflow-x-auto">
            <button class="flex items-center" v-tippy="{ content: '認證標章' }">
              <img class="w-5 lg:w-6" src="@/assets/icon_good01.svg" alt="認證標章 icon">
              <div class="block lg:hidden ml-2 text-xs text-gray-600 whitespace-nowrap">認證標章</div>
            </button>
            <button class="flex items-center" v-tippy="{ content: '品質保證' }">
              <img class="w-5 lg:w-6" src="@/assets/icon_good02.svg" alt="品質保證 icon">
              <div class="block lg:hidden ml-2 text-xs text-gray-600 whitespace-nowrap">品質保證</div>
            </button>
            <button class="flex items-center" v-tippy="{ content: '原生創意' }">
              <img class="w-5 lg:w-6" src="@/assets/icon_good03.svg" alt="原生創意 icon">
              <div class="block lg:hidden ml-2 text-xs text-gray-600 whitespace-nowrap">原生創意</div>
            </button>
            <button class="flex items-center" v-tippy="{ content: '人氣王' }">
              <img class="w-5 lg:w-6" src="@/assets/icon_good04.svg" alt="人氣王 icon">
              <div class="block lg:hidden ml-2 text-xs text-gray-600 whitespace-nowrap">人氣王</div>
            </button>
          </div>

          <div class="mt-2 lg:mt-4 p-4 lg:py-3.5 bg-white text-gray-600 text-sm lg:text-base text-justify border-l-3 border-yellow rounded-lg">
            專案募資中！<br>
            在 <span class="font-bold">2021/06/14 23:59</span> 募資結束前，您都可以贊助我們！
          </div>

          <div class="mt-4 lg:mt-6">
            <button class="btn btn-lg btn-primary w-full" type="button">
              贊助專案
            </button>
            <div class="mt-2 grid grid-cols-10 gap-2">
              <button class="btn btn-lg btn-secondary w-full col-span-5 lg:col-span-6" type="button">
                <i-fa-solid-heart class="w-[18px] h-[18px] mr-2" />追蹤專案
              </button>
              <button class="btn btn-lg btn-secondary w-full col-span-5 lg:col-span-4" type="button">
                <i-fa-solid-share-alt class="w-5 h-5 mr-2" />分享
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
