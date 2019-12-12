<template lang="pug">
  .about
    .title 123
    el-button 456
</template>

<script>

export default {
  components: {
  },
  metaInfo: {
    title: 'about',
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
      text: ''
    }
  },
  methods: {
  },
  async mounted () {
    this.text = await this.$http.get('/v1/profile/info')
  }
}
</script>

<style scoped lang="stylus">

.about {
  .title {
    padding-top 100px
  }
}
</style>
