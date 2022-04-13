<template>
  <div class="home">
    <van-nav-bar :title="title" :left-arrow="false" />
    <div>欢迎进入我的模板</div>
  </div>
</template>

<script>
import navbar from './navbar.vue'
export default {
  components:{
    navbar
  },
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
