<template>
  <div class="home">
    <music-header></music-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

import MusicHeader from '@/components/header'
import Tab from '@/components/tab'

export default {
  name: 'Home',
  components: {
    Tab,
    MusicHeader
  }
}
</script>
