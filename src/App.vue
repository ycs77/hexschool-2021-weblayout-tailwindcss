<template>
  <header class="py-3 border-b-[5px] border-yellow">
    <div class="container flex justify-between">
      <router-link to="/">
        <img class="h-10 ml-1" src="./assets/logo.jpg" alt="拚拚 Logo" />
      </router-link>

      <button type="button">
        <i-mdi-menu class="w-8 h-8" />
      </button>
    </div>
  </header>

  <router-view />

  <footer class="bg-black pt-4 pb-[18px]">
    <div class="text-white text-center text-sm tracking-[0.18px]">
      Copyright &copy; 拼拼 All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  //
}
</script>
