<template lang="pug">
  .my
    .title my
</template>

<script>

export default {
  components: {
  },
  metaInfo: {
    title: 'my',
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
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus">

.my {
  .title {
    padding-top 100px
  }
}
</style>
