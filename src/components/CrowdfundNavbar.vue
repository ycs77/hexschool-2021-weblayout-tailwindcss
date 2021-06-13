<template>
  <div class="border-t border-b border-gray-200">
    <div class="container">
      <nav class="-mx-3 sm:mx-0 lg:mx-2.5">
        <ul class="flex lg:space-x-4">
          <li>
            <router-link to="/" class="block p-4 lg:px-3 lg:py-6 text-gray-600 text-sm lg:text-base tracking-[1.75px]" :class="isActive('/') ? 'font-bold border-b-2 border-yellow' : ''">
              專案介紹
            </router-link>
          </li>
          <li>
            <router-link to="/faqs" class="block p-4 lg:px-3 lg:py-6 text-gray-600 text-sm lg:text-base tracking-[1.75px]" :class="isActive('/faqs') ? 'font-bold border-b-2 border-yellow' : ''">
              常見問答
            </router-link>
          </li>
          <li>
            <router-link to="/news" class="block p-4 lg:px-3 lg:py-6 text-gray-600 text-sm lg:text-base tracking-[1.75px]" :class="isActive('/news') ? 'font-bold border-b-2 border-yellow' : ''">
              目前進度
            </router-link>
          </li>
          <li>
            <router-link to="/comments" class="block p-4 lg:px-3 lg:py-6 text-gray-600 text-sm lg:text-base tracking-[1.75px]" :class="isActive('/comments') ? 'font-bold border-b-2 border-yellow' : ''">
              留言
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
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
