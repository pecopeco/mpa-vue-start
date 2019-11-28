<template lang="pug">
  #app
    main-header
    router-view
</template>

<script>
import mainHeader from '@/components/mainHeader'

export default {
  name: 'app',
  components: {
    mainHeader
  },
  data () {
    return {
    }
  },
  watch: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
  
html,body,#app {
  margin 0
  height 100%
}
#app {
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  font-size 16px
  overflow auto
  & > div {
    &:last-child {
      width 100%
      min-height 100%
      &:before {
        display block
        content: ''
        width 100%
        height 120px
      }
    }
  }
}
.theme {
  color theme
}
.font-gray {
  color fontGray
}
.bold {
  font-weight bold
}
img {
  width 100%
}
</style>
