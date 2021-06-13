<template>
  <header class="py-3 border-b-[5px] border-yellow">
    <div class="container lg:flex">
      <div class="flex justify-between lg:flex-grow-0">
        <RouterLink to="/">
          <img class="h-10 ml-1" src="./assets/logo.jpg" alt="拚拚 Logo" />
        </RouterLink>

        <button class="lg:hidden" type="button" @click="showNav = !showNav">
          <i-mdi-menu class="w-8 h-8" />
        </button>
      </div>

      <div class="lg:flex lg:justify-between lg:items-center lg:flex-1 lg:ml-12" :class="showNav ? '' : 'hidden'">
        <ul class="pt-4 pb-3 lg:py-0 space-y-2 lg:space-y-0 lg:flex lg:space-x-12">
          <li>
            <a class="block py-1 lg:py-0 text-gray-600 hover:text-gray-500" href="/" @click.prevent>
              關於
            </a>
          </li>
          <li>
            <a class="block py-1 lg:py-0 text-gray-600 hover:text-gray-500" href="/" @click.prevent>
              挖寶
            </a>
          </li>
          <li>
            <a class="block py-1 lg:py-0 text-gray-600 hover:text-gray-500" href="/" @click.prevent>
              我有個大膽的想法
            </a>
          </li>
        </ul>

        <div class="grid grid-cols-2 gap-4">
          <button class="btn btn-primary px-8 py-1 font-bold" type="button">
            登入
          </button>
          <button class="btn btn-secondary px-8 py-1 font-bold" type="button">
            註冊
          </button>
        </div>
      </div>
    </div>
  </header>

  <RouterView />

  <footer class="bg-gray-800 pt-4 pb-[18px] lg:py-8">
    <div class="text-white text-center text-sm lg:text-base tracking-[1.8px] lg:tracking-[2px]">
      Copyright &copy; 拼拼 All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
}
</script>
