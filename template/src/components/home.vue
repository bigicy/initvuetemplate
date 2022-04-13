<template>
  <div class="home">
    <div>欢迎进入我的模板</div>
    <van-nav-bar :title="title" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:'模板',
    }
  },
  methods:{
    
  },
  computed:{
  },
  created(){
  },
  mounted(){
  }
}
</script>

<style scoped>
.home{
  background-color: #efefef;
}
</style>
