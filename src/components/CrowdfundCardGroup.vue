<template>
  <div>
    <CrowdfundCreatorInfo />

    <div class="mt-8">
      <h3 class="bg-gray-50 py-1.5 text-xl text-center font-bold border-l-4 border-r-4 border-yellow">
        選擇一個方案來支持
      </h3>

      <ul class="mt-4 space-y-4">
        <li v-for="i in 3">
          <CrowdfundCard />
        </li>
      </ul>
    </div>
  </div>
</template>
