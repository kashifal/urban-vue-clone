<template>
  <div class="bg-white pb-12 sm:pb-20 xl:max-w-[86%] max-w-[72rem] xl:px-0 px-6 gap-4 mx-auto">
    <h1 class="text-4xl sm:text-[7vw] md:text-[5.2vw] xl:text-[68px] leading-none">
      Meet our fleet
    </h1>
    
    <!-- Desktop/Tablet Grid -->
    <div class="mt-10 hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:mt-20 items-start gap-4 md:gap-6 xl:gap-10">
      <AnimateLeft :time="0.3" x="-80%">
        <MeetFleetCard
          mainImg="https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_848,h_778/ar_0.65,c_fill/w_auto,c_fill/f_auto,q_auto/v1729769700/NEW%20website/Shoot%20US%202023%20-%20WEB/CROPPED2%20DSC_2686.2_471395/CROPPED2%20DSC_2686.2_471395.png?_i=AA"
          heading="Urban Arrow Family"
          :hasGradient="true"
        />
      </AnimateLeft>
      <AnimateLeft :time="0.2" x="-80%">
        <MeetFleetCard
          mainImg="https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_848,h_1247/ar_0.65,c_fill/w_auto,c_fill/f_auto,q_auto/v1702979550/NEW%20website/Shoot%20US%202023%20-%20WEB/DSC_9643_small/DSC_9643_small.jpg?_i=AA"
          heading="Urban Arrow Family Smart System"
          :hasGradient="false"
        />
      </AnimateLeft>
     
    </div>

    <!-- Mobile Slider -->
    <Splide
      class="md:hidden mt-10 sm:mt-20 flex"
      ref="splideRef"
      :options="splideOptions"
      @move="handleSplideMove"
      @mounted="handleSplideMove"
    >
      <SplideSlide>
        <AnimateLeft :time="0.3" x="-80%">
          <MeetFleetCard
            mainImg="https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_848,h_778/ar_0.65,c_fill/w_auto,c_fill/f_auto,q_auto/v1729769700/NEW%20website/Shoot%20US%202023%20-%20WEB/CROPPED2%20DSC_2686.2_471395/CROPPED2%20DSC_2686.2_471395.png?_i=AA"
            heading="Urban Arrow Family"
            :hasGradient="true"
          />
        </AnimateLeft>
      </SplideSlide>
      <SplideSlide>
        <AnimateLeft :time="0.2" x="-80%">
          <MeetFleetCard
            mainImg="https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_848,h_1247/ar_0.65,c_fill/w_auto,c_fill/f_auto,q_auto/v1702979550/NEW%20website/Shoot%20US%202023%20-%20WEB/DSC_9643_small/DSC_9643_small.jpg?_i=AA"
            heading="Urban Arrow Family Smart System"
            :hasGradient="false"
          />
        </AnimateLeft>
      </SplideSlide>
     
    </Splide>

    <!-- Navigation Buttons -->
    <div class="flex justify-end mt-10 md:hidden items-center gap-1.5">
      <div
        @click="customPrev"
        :class="[
          'size-10 rotate-180 transition-opacity duration-300 ease-in-out',
          isBeginning
            ? 'opacity-30 cursor-not-allowed'
            : 'opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]',
          'bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center'
        ]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
          <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z" />
        </svg>
      </div>
      <div
        @click="customNext"
        :class="[
          'size-10 rotate-0 transition-opacity duration-300 ease-in-out',
          isEnd
            ? 'opacity-30 cursor-not-allowed'
            : 'opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]',
          'bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center'
        ]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
          <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z" />
        </svg>
      </div>
    </div>
  </div>
</template> 

<script setup>
import { ref } from 'vue'
import MeetFleetCard from './MeetFleetCard.vue'
import AnimateLeft from './AnimateLeft.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

// Add required images/assets
 
// Add missing splideOptions
const splideOptions = {
  type: 'slide',
  perPage: 1,
  arrows: false,
  pagination: false,
  gap: '1rem'
}

// Fix stories reference in handleSplideMove
const stories = [1, 2, 3] // Array length should match number of slides

const splideRef = ref(null)
const isBeginning = ref(true)
const isEnd = ref(false)

const customNext = () => {
  if (splideRef.value && !isEnd.value) {
    splideRef.value.go('+1')
  }
}

const customPrev = () => {
  if (splideRef.value && !isBeginning.value) {
    splideRef.value.go('-1')
  }
}

const handleSplideMove = () => {
  if (splideRef.value) {
    const splide = splideRef.value.splide
    isBeginning.value = splide.index === 0
    isEnd.value = splide.index === stories.length - splide.options.perPage
  }
}
</script>