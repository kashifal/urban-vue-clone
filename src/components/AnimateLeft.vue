<script setup>
 
import { Motion } from '@oku-ui/motion'
import { computed } from 'vue'

const props = defineProps({
  time: {
    type: Number,
    default: 0
  },
  x: {
    type: Number,
    default: 100
  }
})

const animationProps = computed(() => ({
  initial: { opacity: 1, x: props.x },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.5,
    easing: 'ease-out',
    type: 'spring',
    stiffness: 35,
    damping: 8,
    delay: props.time * 0.5
  },
  viewport: {
    once: true,
    margin: '-100px'
  }
}))
</script>

<template>
  <Motion :initial="{  opacity: 0, x: props.x  }"
  :in-view="{opacity: 1, x: 0}"
  :in-view-options="{
    once: true,
  }"
  :transition="{
    type: 'spring',
 
    delay: 1*props.time,
  }">
    <slot></slot>
  </Motion>
</template> 