<template>
  <div>

    <CrowdfundBanner ref="banner" />

    <CrowdfundNavbar class="sticky top-0 z-10 bg-white" />

    <div class="container pt-8 pb-12 grid lg:grid-cols-3 lg:gap-12">
      <div class="lg:col-span-2">
        <main>
          <RouterView v-slot="{ Component }">
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform opacity-0"
              enter-to-class="transform opacity-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="transform opacity-100"
              leave-to-class="transform opacity-0"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </RouterView>
        </main>

        <CrowdfundCardGroup class="mt-8 lg:hidden" />

        <CrowdfundForm ref="form" class="mt-8 lg:mt-12" />
      </div>

      <div class="hidden lg:block lg:col-span-1">
        <CrowdfundCardGroup class="sticky top-[108px]" />
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >
      <button v-if="showBottomBtn" class="lg:hidden fixed inset-x-0 bottom-0 btn btn-primary w-full py-2.5 font-bold tracking-[1.6px] rounded-none shadow-bottom-btn" type="button" @click="scrollToForm">
        贊助專案
      </button>
    </transition>

  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useHead } from '@vueuse/head'
import previewImgUrl from '../assets/preview.jpg'

export default {
  setup() {
    useHead({
      title: '拍出會動的照片｜LivePhotos 魔法拍立得 - 拼拼',
      meta: [
        { name: 'description', content: '施了魔法的照片，留下當下的美好...' },
        { property: 'og:url', content: import.meta.env.BASE_URL },
        { property: 'og:title', content: '拍出會動的照片｜LivePhotos 魔法拍立得 - 拼拼' },
        { property: 'og:description', content: '施了魔法的照片，留下當下的美好...' },
        { property: 'og:image', content: previewImgUrl },
        { name: 'twitter:card', content: 'summary' },
      ],
    })

    const banner = ref(null)
    const form = ref(null)
    const showBottomBtn = ref(false)
    const inBanner = ref(false)
    const inForm = ref(false)

    const navbarTop = computed(() => {
      const el = banner.value.$el
      return el.offsetTop + el.clientHeight
    })
    const formTop = computed(() => {
      const el = form.value.$el
      return el ? el.offsetTop : 0
    })

    function scrollToNavbar() {
      window.scrollTo({ top: navbarTop.value, behavior: 'smooth' })
    }
    function scrollToForm() {
      window.scrollTo({ top: formTop.value - 72, behavior: 'smooth' })
    }

    function updateShowBottomBtnWithObserver() {
      showBottomBtn.value = !inBanner.value && !inForm.value
    }

    function useObserveBanner() {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          inBanner.value = entry.isIntersecting
          updateShowBottomBtnWithObserver()
        })
      }, { rootMargin: '-1px 0px 0px 0px' })
      observer.observe(banner.value.$el)
    }

    function useObserveForm() {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          inForm.value = entry.isIntersecting
          updateShowBottomBtnWithObserver()
        })
      }, { threshold: 0.8 })
      observer.observe(form.value.$el)
    }

    onMounted(() => {
      useObserveBanner()
      useObserveForm()
    })

    onBeforeRouteUpdate((to, from) => {
      scrollToNavbar()
    })

    return { banner, form, showBottomBtn, scrollToForm }
  },
}
</script>
