<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0 }"
    :variants="{ custom: { scale: 2 } }"
    class="p-8 bg-blue-500 text-white rounded-lg"
  >
    Animated Content
  </div>
</template> 