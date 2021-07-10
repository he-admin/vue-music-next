<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import userScroll from '@/components/base/scroll/user-scroll'
import { ref } from 'vue'

export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const rootRef = ref(null)
    userScroll(rootRef, props)
    return { rootRef }
  }
}
</script>

<style scoped>

</style>
