<template>
  <div>
    <van-nav-bar :title="title" left-text="返回" left-arrow
                 @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name:'navbar',
  props:{
    title:'', // 标题
  },
  data(){
    return{

    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
  }
}
</script>

<style lang="less" scoped>

</style>
