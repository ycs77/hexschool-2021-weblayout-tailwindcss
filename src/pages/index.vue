<template>
  <main>

    <crowdfund-banner />

    <crowdfund-navbar />

    <div class="container pt-8 pb-12 grid">

      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div class="lg:col-span-2">
          <main>
            <router-view />
          </main>

          <crowdfund-form class="hidden lg:block mt-12" />
        </div>

        <div class="lg:col-span-1">
          <crowdfund-creator-info />

          <div class="mt-8">
            <h3 class="bg-gray-100 py-1.5 text-xl text-center font-bold border-l-4 border-r-4 border-yellow">
              選擇一個方案來支持
            </h3>

            <ul class="mt-4 space-y-4">
              <li v-for="i in 3">
                <crowdfund-card />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <crowdfund-form class="lg:hidden mt-8" />

    </div>

  </main>
</template>
