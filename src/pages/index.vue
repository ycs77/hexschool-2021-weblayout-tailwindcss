<template>
  <div>

    <CrowdfundBanner ref="banner" />

    <CrowdfundNavbar class="sticky top-0 z-10 bg-white" />

    <div class="container pt-8 pb-12 grid">

      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
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

          <CrowdfundForm class="hidden lg:block mt-12" />
        </div>

        <div class="lg:col-span-1">
          <div class="sticky top-[108px]">
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
        </div>
      </div>

      <CrowdfundForm ref="mobileForm" class="lg:hidden mt-8" />

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
export default {
  data() {
    return {
      showBottomBtn: false,
      inBanner: false,
      inMobileForm: false,
    }
  },
  methods: {
    scrollToNavbar() {
      window.scrollTo({ top: this.navbarTop(), behavior: 'smooth' })
    },
    scrollToForm() {
      window.scrollTo({ top: this.formTop() - 72, behavior: 'smooth' })
    },

    navbarTop() {
      const el = this.$refs.banner.$el
      return el.offsetTop + el.clientHeight
    },
    formTop() {
      const el = this.$refs.mobileForm.$el
      return el ? el.offsetTop : 0
    },

    updateShowBottomBtnWithObserver() {
      this.showBottomBtn = !this.inBanner && !this.inMobileForm
    },

    observeBanner() {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          this.inBanner = entry.isIntersecting
          this.updateShowBottomBtnWithObserver()
        })
      }, { rootMargin: '-1px 0px 0px 0px' })
      observer.observe(this.$refs.banner.$el)
    },

    observeMobileForm() {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          this.inMobileForm = entry.isIntersecting
          this.updateShowBottomBtnWithObserver()
        })
      }, { threshold: 0.8 })
      observer.observe(this.$refs.mobileForm.$el)
    },
  },
  mounted() {
    this.observeBanner()
    this.observeMobileForm()
  },
  beforeRouteUpdate(to, from) {
    this.scrollToNavbar()
  },
}
</script>
