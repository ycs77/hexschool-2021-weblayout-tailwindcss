<template>
  <div class="border-t border-b border-gray-200">
    <div class="container">
      <nav class="-mx-3 sm:mx-0 lg:mx-2.5">
        <ul class="flex lg:space-x-4">
          <li>
            <RouterLink to="/" class="block p-4 lg:px-3 lg:py-6 text-gray-600 text-sm lg:text-base tracking-[1.75px]" exact-active-class="font-bold border-b-2 border-yellow">
              專案介紹
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/faqs" class="block p-4 lg:px-3 lg:py-6 text-gray-600 text-sm lg:text-base tracking-[1.75px]" exact-active-class="font-bold border-b-2 border-yellow">
              常見問答
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/news" class="block p-4 lg:px-3 lg:py-6 text-gray-600 text-sm lg:text-base tracking-[1.75px]" exact-active-class="font-bold border-b-2 border-yellow">
              目前進度
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/comments" class="block p-4 lg:px-3 lg:py-6 text-gray-600 text-sm lg:text-base tracking-[1.75px]" exact-active-class="font-bold border-b-2 border-yellow">
              留言
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
