<template>
  <div class="bg-[#F0E600] min-h-[20vw] h-full xl:min-h-[55vw]">
    <div class="xl:max-w-[86%] text-[#000] mx-auto py-16 md:py-32 max-w-[72rem] px-6">
      <div class="flex items-center justify-between gap-2">
        <h1 class="sm:text-[7vw] text-4xl md:text-[45px] xl:text-[65px] leading-none">
          We've got stories to tell
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

      <div class="mt-20">
        <Splide
          ref="splideRef"
          :options="splideOptions"
          @moved="handleSplideMove"
          @mounted="handleSplideMove"
        >
          <SplideSlide v-for="(story, index) in stories" :key="story.id">
            <AnimateLeft
              :time="index === 0 ? 0.3 : index === 1 ? 0.2 : 0.1"
              x="-80%"
            >
              <div class="bg-white w-full cursor-pointer text-[#1A1919] overflow-hidden rounded-xl">
                <img
                  class="h-[35vh] w-full object-cover"
                  :src="story.image"
                  :alt="story.title"
                />
                <div class="px-4 py-5">
                  <h4 class="font-medium">{{ story.date }} | {{ story.category }}</h4>
                  <h1 class="font-medium py-3 text-[28px]">
                    {{ story.title }}
                    <br class="xl:block hidden" /> {{ story.subtitle }}
                  </h1>
                  <button class="px-[18px] button-font py-3 rounded-full mt-2 bg-black text-white">
                    {{ story.buttonText }}
                  </button>
                </div>
              </div>
            </AnimateLeft>
          </SplideSlide>
          <SplideSlide v-for="(story, index) in stories" :key="story.id">
            <AnimateLeft
              :time="index === 0 ? 0.3 : index === 1 ? 0.2 : 0.1"
              x="-80%"
            >
              <div class="bg-white w-full cursor-pointer text-[#1A1919] overflow-hidden rounded-xl">
                <img
                  class="h-[35vh] w-full object-cover"
                  :src="story.image"
                  :alt="story.title"
                />
                <div class="px-4 py-5">
                  <h4 class="font-medium">{{ story.date }} | {{ story.category }}</h4>
                  <h1 class="font-medium py-3 text-[28px]">
                    {{ story.title }}
                    <br class="xl:block hidden" /> {{ story.subtitle }}
                  </h1>
                  <button class="px-[18px] button-font py-3 rounded-full mt-2 bg-black text-white">
                    {{ story.buttonText }}
                  </button>
                </div>
              </div>
            </AnimateLeft>
          </SplideSlide>
          <SplideSlide v-for="(story, index) in stories" :key="story.id">
            <AnimateLeft
              :time="index === 0 ? 0.3 : index === 1 ? 0.2 : 0.1"
              x="-80%"
            >
              <div class="bg-white w-full cursor-pointer text-[#1A1919] overflow-hidden rounded-xl">
                <img
                  class="h-[35vh] w-full object-cover"
                  :src="story.image"
                  :alt="story.title"
                />
                <div class="px-4 py-5">
                  <h4 class="font-medium">{{ story.date }} | {{ story.category }}</h4>
                  <h1 class="font-medium py-3 text-[28px]">
                    {{ story.title }}
                    <br class="xl:block hidden" /> {{ story.subtitle }}
                  </h1>
                  <button class="px-[18px] button-font py-3 rounded-full mt-2 bg-black text-white">
                    {{ story.buttonText }}
                  </button>
                </div>
              </div>
            </AnimateLeft>
          </SplideSlide>
        </Splide>
      </div>

      <!-- Bottom controls section -->
      <div class="mt-14 flex flex-wrap items-center justify-between md:justify-end">
        <button class="px-5 button-font py-3 rounded-full mt-2 border-black border hover:bg-black text-black hover:text-white">
          All stories
        </button>
        <!-- Mobile navigation controls -->
        <div class="md:hidden flex items-center gap-1.5">
          <!-- Previous/Next buttons (same as above) -->
          <div class="flex justify-end   md:hidden items-center gap-1.5">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import AnimateLeft from './AnimateLeft.vue'

const splideRef = ref(null)
const isBeginning = ref(true)
const isEnd = ref(false)

const stories = [
  {
    id: 1,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
    date: 'November 07, 2024',
    category: 'News',
    title: 'The Cargo Bike Chronicles:',
    subtitle: 'a story by Seth Williams',
    buttonText: 'Read more',
  }, {
    id: 1,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
    date: 'November 07, 2024',
    category: 'News',
    title: 'The Cargo Bike Chronicles:',
    subtitle: 'a story by Seth Williams',
    buttonText: 'Read more',
  }, {
    id: 1,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
    date: 'November 07, 2024',
    category: 'News',
    title: 'The Cargo Bike Chronicles:',
    subtitle: 'a story by Seth Williams',
    buttonText: 'Read more',
  }, {
    id: 1,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
    date: 'November 07, 2024',
    category: 'News',
    title: 'The Cargo Bike Chronicles:',
    subtitle: 'a story by Seth Williams',
    buttonText: 'Read more',
  }, {
    id: 1,
    image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
    date: 'November 07, 2024',
    category: 'News',
    title: 'The Cargo Bike Chronicles:',
    subtitle: 'a story by Seth Williams',
    buttonText: 'Read more',
  },
  // ... rest of the stories array
]

const splideOptions = {
  type: 'slide',
  perPage: 3,
  perMove: 1,
  arrows: false,
  loop: false,
  pagination: false,
  gap: '2rem',
  speed: 800,
  rewind: false,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  breakpoints: {
    768: { perPage: 1 },
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
    isEnd.value = splide.index === stories.length - splide.options.perPage
  }
}
</script>
