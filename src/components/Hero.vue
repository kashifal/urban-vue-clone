<template>
    <div class="lg:h-screen overflow-hidden z-[4] min-h-[110vh] md:min-h-[70vh] w-screen relative">
      <!-- Video Background -->
      <video
        ref="videoRef"
        class="h-full z-30 object-cover w-screen top-0 left-0 absolute"
        autoplay
        muted
        loop
      >
        <source
          src="https://cloudinary.pondigital.solutions/urbanarrow/video/upload/f_auto,q_auto:eco/v1719844041/NEW website/FamilyNext Lifestyle/Video/FamilyNext - Banner homepage/Urban_Arrow_Family_Bikes_H_B.mp4?_i=AA"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
  
      <!-- Scroll Indicator -->
      <div
        class="z-[9999] text-white top-[90%] sm:top-auto sm:bottom-20 absolute text-xl right-0 md:right-auto md:left-[90%] transform gap-2 cursor-pointer"
        @click="scrollToNextSection"
      >
        <div class="flex  items-center gap-2 flex-row-reverse rotate-90">
          <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
              clip-rule="evenodd"
            />
          </svg>
          Scroll
        </div>
      </div>
  
      <!-- Content -->
      <div class="z-40 md:mt-6 w-[98%] sm:auto lg:w-fit md:w-[70%] md:mx-auto md:mx-0 tracking-wide absolute top-[48%] sm:top-[50%] md:top-1/2 pl-6 sm:pl-10 md:pl-0 md:left-[8%] md:right-1/2 transform md:-translate-y-1/2">
        <h1 class="md:text-[71.3px] xl:text-[5.6rem] text-5xl md:text-6xl text-white font-">
          Meet your <br class="md:block hidden" /> next car
        </h1>
  
        <p class="text-base py-4 sm:py-6 text-white font-light">
          Our wide range of cargo bikes offers an easy and sustainable solution for every purpose. 
          Whether it is you are taking your precious load from A to B or transporting important packages. 
          Whatever moves you, we've got you covered.
        </p>
  
        <button
          class="bg-[#BEEB82] font-medium button-font hover:opacity-90 sm:mt-7 px-5 py-3.5 rounded-full"
          @click="handlePause"
        >
          Explore all bikes
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const videoRef = ref(null)
  
  onMounted(() => {
    videoRef.value?.play().catch(err => console.error('Autoplay failed:', err))
  })
  
  const handlePause = () => {
    videoRef.value?.pause()
  }
  
  const scrollToNextSection = () => {
    document.querySelector('#next-section')?.scrollIntoView({ behavior: 'smooth' })
  }
  </script>