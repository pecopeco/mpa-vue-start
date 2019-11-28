<template lang="pug">
  .home
    .title home
</template>

<script>

export default {
  components: {
  },
  metaInfo: {
    title: 'home',
    meta: [
      {
        name: 'keywords',
        content: '关键字1,关键字2,关键字3'
      },
      {
        name: 'description',
        content: '网页描述'
      }
    ]
  },
  data () {
    return {
      text: '123',
      time: 1566274478
    }
  },
  methods: {
    async getData () {
      this.$message('loading...')
      this.$store.dispatch('setUser', {name: 'yang'})
      this.text = await this.$http.get('/search', {id: 1})
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped lang="stylus">

.home {
  .title {
    padding-top 100px
  }
}
</style>
