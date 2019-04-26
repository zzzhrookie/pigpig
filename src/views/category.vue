<template>
  <div>
    分类
    <div>
      <el-button @click="click">按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.count
    }
  },
  methods: {
    click () {
      this.$store.commit('increment')
    }
  }
}
</script>
