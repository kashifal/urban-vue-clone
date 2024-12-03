<template>
  <a
    href="#"
    class="lg:w-[37vw] sm:w-[38vw] md:w-[45vw] w-[100vw] 2xl:w-[33%] group cursor-pointer h-full overflow-hidden"
  >
    <div class="h-[60vh] md:h-[80vw] xl:h-[75vh] w-full relative flex flex-col justify-between overflow-hidden rounded-2xl">
      <!-- Image Layer -->
      <div class="w-full h-full absolute top-0 left-0 z-[2]">
        <img
          :src="mainImg"
          class="w-full group-hover:scale-[1.05] transition-all duration-1000 object-cover h-full"
          alt=""
        />
      </div>

      <!-- Text Layer -->
      <div
        class="sm:px-6 px-3 text-[6vw] font-semibold button-font sm:text-[4vw] md:text-[2.5vw] text-white xl:text-[32px] leading-none pb-24 pt-6 z-[4] relative"
        :style="gradientStyle"
      >
        {{ heading }}
      </div>

      <!-- Button Layer -->
      <div class="size-10 mb-7 mx-11 bg-[#1A1919] rounded-full z-[4] relative flex text-white cursor-pointer hover:bg-black hover:scale-[1.05] transition-all duration-100 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
          />
        </svg>
      </div>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  mainImg: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  hasGradient: {
    type: Boolean,
    default: false
  }
})

const gradientStyle = computed(() => {
  return props.hasGradient
    ? { backgroundImage: 'linear-gradient(to bottom, rgba(184, 184, 184, 1), rgba(184, 184, 184, 0))' }
    : { color: 'white' }
})
</script> 