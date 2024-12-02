<script setup>
 
import { computed } from 'vue'
import { Motion } from '@oku-ui/motion'

const props = defineProps({
  time: {
    type: Number,
    default: 0
  }
})

const animationProps = computed(() => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.3,
    easing: 'ease-out',
    delay: props.time
  },
  viewport: {
    once: true,
    amount: props.time
  }
}))
</script>

<template>
  <Motion :initial="{ opacity: 0, y: 20 }"
  :in-view="{ opacity: 1, y: 0 }"
  :in-view-options="{
    once: true,
  }"
  :transition="{
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 0.2,
  }">
    <slot></slot>
  </Motion>
</template> 