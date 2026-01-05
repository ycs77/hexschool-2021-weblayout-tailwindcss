<template>
  <div class="p-4 border border-gray-100 rounded-lg">
    <div class="flex items-center">
      <img class="w-[73px] h-[73px] lg:w-[100px] lg:h-[100px] border-3 border-yellow rounded-full" src="@/assets/store_img.jpg" alt="缺錢事務所 的大頭照">

      <div class="ml-4">
        <div class="text-lg lg:text-xl font-medium tracking-[1.8px] lg:tracking-[2px]">
          缺錢事務所
        </div>
        <div class="mt-1.5 text-gray-900 text-sm lg:text-base tracking-[0.61px] lg:tracking-[0.7px]">
          已發起 <span class="text-[rgb(31,30,0)] font-bold">1</span> 個專案
        </div>
      </div>
    </div>

    <p class="hidden lg:block mt-4 text-gray-900">
      需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！
    </p>

    <div class="mt-4 flex justify-between">
      <div class="space-x-2">
        <a class="inline-flex justify-center items-center size-7.5 bg-gray-500 text-white rounded-full" href="#fb-link" @click.prevent>
          <FaBrandsFacebookF class="w-auto h-4" />
        </a>

        <a class="inline-flex justify-center items-center size-7.5 bg-gray-500 text-white rounded-full" href="#youtube-link" @click.prevent>
          <FaBrandsYoutube class="w-auto h-4" />
        </a>
      </div>

      <button class="btn btn-secondary w-auto px-4 py-1.5 border text-xs" type="button">
        <FaRegularCommentDots class="w-auto h-3 mr-1" />聯絡我們
      </button>
    </div>
  </div>
</template>
