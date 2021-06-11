<template>
  <main>

    <div class="bg-light pt-4 pb-8">
      <div class="container">
        <div>
          <span class="px-4 py-0.5 bg-gray text-white text-xs leading-[18px] rounded">魔法科技</span>
        </div>

        <h1 class="mt-2 text-darken text-2xl font-bold leading-9 tracking-[2.25px]">
          拍出會動的照片｜LivePhotos 魔法拍立得
        </h1>

        <img class="mt-4" src="../assets/produt_image.jpg" alt="產品圖片">

        <div class="mt-4">
          <div class="text-dark text-sm">
            目標 <span class="font-baloo">$600,000</span>
          </div>
          <div class="text-darken text-[32px] leading-[56px] font-baloo font-semibold">
            $280,047
          </div>

          <div class="h-4 bg-[#EEEEEE] rounded-full overflow-hidden">
            <div class="bg-yellow flex justify-center" style="width: 41%">
              <span class="text-sm text-gray font-baloo font-semibold">41%</span>
            </div>
          </div>

          <div class="mt-2 grid grid-cols-2">
            <div>
              <div class="text-sm text-dark">贊助人數</div>
              <div class="text-darken">
                <span class="text-[32px] leading-[56px] font-baloo font-semibold">1374</span>
                <span class="text-2xl leading-[56px] font-bold"> 人</span>
              </div>
            </div>
            <div>
              <div class="text-sm text-dark">募資倒數</div>
              <div class="text-darken">
                <span class="text-[32px] leading-[56px] font-baloo font-semibold">27</span>
                <span class="text-2xl leading-[56px] font-bold"> 天</span>
              </div>
            </div>
          </div>

          <div class="flex h-9 space-x-5 overflow-hidden">
            <div class="flex items-center">
              <img class="w-5 h-5" src="../assets/icon_good01.svg" alt="認證標章 icon">
              <div class="ml-2 text-xs text-dark whitespace-nowrap">認證標章</div>
            </div>
            <div class="flex items-center">
              <img class="w-5 h-5" src="../assets/icon_good02.svg" alt="品質保證 icon">
              <div class="ml-2 text-xs text-dark whitespace-nowrap">品質保證</div>
            </div>
            <div class="flex items-center">
              <img class="w-5 h-5" src="../assets/icon_good03.svg" alt="原生創意 icon">
              <div class="ml-2 text-xs text-dark whitespace-nowrap">原生創意</div>
            </div>
            <div class="flex items-center">
              <img class="w-5 h-5" src="../assets/icon_good04.svg" alt="人氣王 icon">
              <div class="ml-2 text-xs text-dark whitespace-nowrap">人氣王</div>
            </div>
          </div>

          <div class="mt-2 p-4 bg-white text-dark text-sm text-justify border-l-3 border-yellow rounded-lg">
            專案募資中！<br>
            在 <span class="font-bold">2021/06/14 23:59</span> 募資結束前，您都可以贊助我們！
          </div>

          <div class="mt-4">
            <button class="btn btn-lg btn-primary" type="button">
              贊助專案
            </button>
            <div class="mt-2 grid grid-cols-2 gap-2">
              <button class="btn btn-lg btn-secondary" type="button">
                <i-fa-solid-heart class="w-[18px] h-[18px] mr-2" />追蹤專案
              </button>
              <button class="btn btn-lg btn-secondary" type="button">
                <i-fa-solid-share-alt class="w-5 h-5 mr-2" />分享
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-0">
      <nav class="border-t border-b border-light-gray">
        <ul class="flex">
          <li>
            <router-link to="/" class="block p-4 text-dark text-sm tracking-[1.75px]" :class="isActive('/') ? 'font-bold border-b-2 border-yellow' : ''">
              專案介紹
            </router-link>
          </li>
          <li>
            <router-link to="/QA" class="block p-4 text-dark text-sm tracking-[1.75px]" :class="isActive('/QA') ? 'font-bold border-b-2 border-yellow' : ''">
              常見問答
            </router-link>
          </li>
          <li>
            <router-link to="/progress" class="block p-4 text-dark text-sm tracking-[1.75px]" :class="isActive('/progress') ? 'font-bold border-b-2 border-yellow' : ''">
              目前進度
            </router-link>
          </li>
          <li>
            <router-link to="/comments" class="block p-4 text-dark text-sm tracking-[1.75px]" :class="isActive('/comments') ? 'font-bold border-b-2 border-yellow' : ''">
              留言
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container pt-8 pb-12">

      <main>
        <router-view />
      </main>

      <aside class="mt-8">
        <div class="p-4 border border-[#E5E5E5] rounded-lg">
          <div class="flex items-center">
            <img class="w-[73px] h-[73px] border-3 border-yellow rounded-full" src="../assets/store_img.jpg" alt="缺錢事務所 的大頭照">
            <div class="ml-4">
              <h5 class="text-lg font-medium tracking-[1.8px]">缺錢事務所</h5>
              <div class="mt-1.5 text-[#373A3C] text-sm tracking-[0.61px]">已發起 <span class="text-[#1F1E00] font-bold">1</span> 個專案</div>
            </div>
          </div>

          <div class="mt-4 flex justify-between">
            <div class="space-x-2">
              <a class="inline-flex justify-center items-center w-[30px] h-[30px] bg-gray text-white rounded-full" href="#fb-link" @click.prevent>
                <i-fa-brands-facebook-f class="w-auto h-4" />
              </a>
              <a class="inline-flex justify-center items-center w-[30px] h-[30px] bg-gray text-white rounded-full" href="#youtube-link" @click.prevent>
                <i-fa-brands-youtube class="w-auto h-4" />
              </a>
            </div>
            <button class="btn btn-secondary w-auto px-4 py-1.5 border text-xs" type="button">
              <i-fa-regular-comment-dots class="w-auto h-3 mr-1" />聯絡我們
            </button>
          </div>
        </div>

        <div class="mt-8">
          <h3 class="bg-light py-1.5 text-xl text-center font-bold border-l-4 border-r-4 border-yellow">
            選擇一個方案來支持
          </h3>

          <div class="mt-4 space-y-4">
            <div v-for="i in 2" class="border border-light-gray rounded-lg shadow overflow-hidden">
              <img src="../assets/plan_img.jpg" alt="">
              <div class="pt-2 pb-4 px-4 ">
                <div class="flex justify-between">
                  <span class="text-dark text-sm tracking-[2px]">限時優惠</span>
                  <span class="text-dark text-sm font-baloo">2 days 20:05:20</span>
                </div>
                <hr class="mt-2 border-light-gray">
                <h4 class="mt-2 text-lg tracking-[2px] font-bold">買一送一，只有兩百組別錯過</h4>
                <div class="text-2xl font-baloo font-bold leading-10">NT$ 1600</div>
                <div class="space-x-2">
                  <span class="inline-block px-4 py-0.5 bg-light-gray text-gray text-xs font-medium rounded">
                    已被贊助88次
                  </span>
                  <span class="inline-block px-4 py-0.5 bg-gray text-white text-xs font-medium rounded">
                    限量<span class="text-yellow">200</span>個
                  </span>
                </div>
                <p class="mt-2 text-gray text-justify tracking-[0.7px]">
                  受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。
                </p>
                <button class="mt-4 btn btn-lg btn-primary py-2.5 text-base tracking-[1.1px]" type="button">
                  贊助此專案
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <form @submit.prevent class="mt-8">
        <img class="mx-auto" src="../assets/icon_heart.svg" alt="贊助專案 icon">
        <h2 class="mt-2.5 text-xl text-center tracking-[1.6px] font-bold overflow-hidden">
          <span class="inline-block relative">
            <div class="absolute top-[0.7rem] right-full w-[1000px] h-[3px] mr-3 bg-yellow"></div>
            贊助專案
            <div class="absolute top-[0.7rem] left-full w-[1000px] h-[3px] ml-3 bg-yellow"></div>
          </span>
        </h2>

        <div class="space-y-2">
          <div>
            <label>贊助方案</label>
            <select class="mt-2">
              <option>請選擇一個方案</option>
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
            </select>
          </div>
        </div>

        <button class="mt-6 btn btn-lg btn-primary text-base" type="submit">
          贊助專案
        </button>
      </form>

    </div>

  </main>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
  },
}
</script>
