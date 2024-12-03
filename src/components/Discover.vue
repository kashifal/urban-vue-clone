<template>
  <div class="pt-6 pb-16 sm:pb-32">
    <div class="xl:max-w-[86%] text-[#000] mx-auto pt-16 md:pt-20 max-w-[72rem] px-6">
      <div class="flex items-center justify-between gap-2">
        <h1 class="text-[7vw] md:text-[45px] xl:text-[63px] leading-none">
          More to discover
        </h1>
        <div class="md:flex hidden items-center gap-1.5">
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
              'size-10 transition-opacity duration-300 ease-in-out',
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

      <div class="mt-20 flex justify-between md:justify-end"></div>
    </div>
    <div :class="[isBeginning ? 'xl:pl-36' : 'pl-6', 'pl-6']">
      <Splide
        ref="splideRef"
        :options="splideOptions"
        @moved="handleSplideMove"
        @mounted="handleSplideMove"
      >
        <SplideSlide v-for="(card, index) in discoverCards" :key="card.id">
          <AnimateLeft
            :time="index === 0 ? 0.3 : index === 1 ? 0.2 : 0.1"
            x="-80%"
          >
            <div class="bg-[#FAFAF0] min-h-[60vh] h-[60vh] flex flex-col justify-between cursor-pointer text-[#1A1919] overflow-hidden rounded-xl">
              <img
                class="h-[28vh] w-full object-cover"
                :src="card.image"
                :alt="card.title"
              />
              <div class="px-6 text-center pb-8 pt-14">
                <h1 class="font-medium py-3 text-[28px]">{{ card.title }}</h1>
                <h4 class="font-medium py-2">{{ card.description }}</h4>
                <button class="px-5 button-font py-3.5 rounded-full mt-2 hover:bg-[#fff53e] bg-[#F0E600] text-black">
                  {{ card.buttonText }}
                </button>
              </div>
            </div>
          </AnimateLeft>
        </SplideSlide>
      </Splide>
    </div>
    <div class="md:hidden mt-8 px-6 justify-end w-full flex items-center gap-1.5">
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
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import AnimateLeft from './AnimateLeft.vue'

const splideRef = ref(null)
const isBeginning = ref(true)
const isEnd = ref(false)

const discoverCards = [
  {
    id: 1,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_967/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1723554357/NEW%20website/Roadshow%20-%20WEB/DSCF9773/DSCF9773.jpg?_i=AA',
    title: 'Bike Advisor',
    description: 'With the bike advisor, you will discover which bike suits you in one time',
    buttonText: 'Bike Advisor',
  },
  {
    id: 2,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_967/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1716367044/NEW%20website/Shoot%20US%202023%20-%20WEB/DSC_2659/DSC_2659.jpg?_i=AA',
    title: 'Cargo bike pocket guide',
    description: 'Take your favorite bike on the road and see how it fits your lifestyle.',
    buttonText: 'Read',
  },
  {
    id: 3,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_432/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1690363308/NEW%20website/Shoot%20US%202023%20-%20WEB/_DSC0771-web/_DSC0771-web.jpg?_i=AA',
    title: 'Service Center',
    description: 'Learn how to keep your bike in top shape with expert advice.',
    buttonText: 'Go To Service Center',
  },
  {
    id: 4,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_432/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1690363308/NEW%20website/Shoot%20US%202023%20-%20WEB/_DSC0771-web/_DSC0771-web.jpg?_i=AA',
    title: 'Service Center',
    description: 'Learn how to keep your bike in top shape with expert advice.',
    buttonText: 'Go To Service Center',
  },
  {
    id: 5,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_432/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1690363308/NEW%20website/Shoot%20US%202023%20-%20WEB/_DSC0771-web/_DSC0771-web.jpg?_i=AA',
    title: 'Service Center', 
    description: 'Learn how to keep your bike in top shape with expert advice.',
    buttonText: 'Go To Service Center',
  },
  {
    id: 6,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_432/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1690363308/NEW%20website/Shoot%20US%202023%20-%20WEB/_DSC0771-web/_DSC0771-web.jpg?_i=AA',
    title: 'Service Center',
    description: 'Learn how to keep your bike in top shape with expert advice.',
    buttonText: 'Go To Service Center',
  }
]

const splideOptions = {
  type: 'slide',
  perPage: 3.5,
  perMove: 1,
  arrows: false,
  pagination: false,
  gap: '3rem',
  speed: 800,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  breakpoints: {
    768: { perPage: 1.3 },
    1024: { perPage: 2 },
    1280: { perPage: 3 },
  },
}

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
    const splide = splideRef.value
    isBeginning.value = splide.index === 0
    isEnd.value = splide.index === discoverCards.length - splide.options.perPage
  }
}
</script>
