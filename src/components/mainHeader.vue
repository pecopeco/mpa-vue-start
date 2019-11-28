<template lang="pug">
  .header
    .header-wrap
      .logo(@click="go('./')")
        img(src="@/assets/logo.png")
      .list
        .item.index(:class="{'checked': $route.name === 'home'}" @click="go('./')") 首页
        .item.index(:class="{'checked': $route.name === 'about'}" @click="go('./about')") 关于
        .item.about(:class="{'checked': $route.name === 'my'}" @click="go('./my')") 个人中心
</template>

<script>

export default {
  props: {
  },
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted () {
    console.log(this.$route.name)
  }
}
</script>

<style scoped lang="stylus">
.header {
  position fixed
  top 0
  left 0
  width 100%
  height 120px
  background #fff
  box-shadow 0 5px 5px borderGray
  z-index 999
  .header-wrap {
    position relative
    flex 1
    display flex
    align-items center
    justify-content center
    height 100%
    padding 0 100px
    .logo {
      height 100%
      display flex
      align-items center
      img {
        width 80px
      }
    }
    .list {
      display flex
      padding-left 100px
      .item {
        width 100px
        text-align center
        cursor pointer
      }
      .checked {
        color theme
      }
    }
  }
}
</style>
