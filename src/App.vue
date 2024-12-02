<script setup>
import { Motion } from '@motionone/vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Animate from './components/Animate.vue'
import Header from './components/Header.vue'

const route = useRoute()
const pageKey = computed(() => route.path)
</script>

<template>
  <div>
    <Header /> 
    <router-view></router-view>

  </div>
</template>

 