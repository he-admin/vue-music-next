<template>
  <div class="singer-list" v-loading="loading">
    <index-list :data="singerList"></index-list>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/index-list/index-list'

export default {
  name: 'index',
  components: {
    IndexList
  },
  data () {
    return {
      singerList: []
    }
  },
  computed: {
    loading () {
      return !this.singerList.length
    }
  },
  async created () {
    const result = await getSingerList()
    this.singerList = result.singers
  }
}
</script>

<style lang="scss" scoped>
.singer-list {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
