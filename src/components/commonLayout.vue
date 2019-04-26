<template>
  <div class="commonLayout">
    <common-header></common-header>
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonHeader from './commonHeader'
import commonFooter from './commonFooter'

export default {
  components: {
    commonHeader,
    commonFooter
  }
}
</script>

<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
