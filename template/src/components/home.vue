<template>
  <div class="home">
    <van-nav-bar :title="title" />
    <div class="head">
      <div class="content">
        <div class="count">{{ uploadCount.unUpload }}</div>
        <div class="title">需上传</div>
      </div>
      <div class="content">
        <div class="count">{{ uploadCount.hasUpload }}</div>
        <div class="title">已上传</div>
      </div>
      <div class="content">
        <div class="count">{{ uploadCount.hasCheck }}</div>
        <div class="title">已验收</div>
      </div>
      <div class="content" @click="addAction">
        <div class="count">+</div>
        <div class="title">新增</div>
      </div>
    </div>
    <div class="list" v-if="list.length > 0">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="status">{{checkStatus[item.status]}}</div>
        <div class="time" v-if="item.status === 2">{{item.time}}</div>
        <div class="action" v-else>
          <div class="change" @click="changeAction(item)">修改</div>
          <div class="delete" @click="deleteAction(item)">删除</div>
        </div>
      </div>
    </div>
    <div v-else>
      <van-empty description="当前还未上传数据" />
    </div>
  </div>
</template>

<script>
import httpData from '../libs/httpData'
export default {
  data(){
    return {
      title:'验收-苏州汽车南站',
      loading: false, // 加载状态
      uploadCount:{
        unUpload: 1, // 需上传
        hasUpload: 2, // 已上传
        hasCheck: 3, // 已验收
      },
      // 验收状态
      checkStatus:{
        0: '未验收',
        1: '验收不通过',
        2: '验收通过',
      },
      // 列表
      list:[
        {
          name: 'A12345',
          type: 1,
          status: 0,
          time: '2022-04-11 13:34:56'
        },
        {
          name: 'A12345',
          type: 1,
          status: 1,
          time: '2022-04-11 13:34:56'
        },
        {
          name: 'A12345',
          type: 1,
          status: 2,
          time: '2022-04-11 13:34:56'
        },
        {
          name: '苏州汽车南站',
          type: 2,
          status: 0,
          time: '2022-04-11 13:34:56'
        },
        {
          name: '苏州汽车南站',
          type: 2,
          status: 1,
          time: '2022-04-11 13:34:56'
        },
        {
          name: '苏州汽车南站',
          type: 2,
          status: 2,
          time: '2022-04-11 13:34:56'
        },
      ]
    }
  },
  methods:{
    addAction(){
      this.$router.push({ name: 'upload', params:{ data: {} }})
    },
    // 修改
    changeAction(item){
      this.$router.push({ name: 'upload', params:{ data: item }})
    },
    // 删除
    deleteAction(item){
      this.$router.push({ name: 'upload', params:{ data: item }})
    }
  },
  computed:{
  },
  created(){
  },
  mounted(){
  }
}
</script>

<style lang="less" scoped>
.home{
  background-color: #efefef;
  .head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: @greenColor;
    padding: 20px;
    .content{
      background-color: white;
      padding: 10px;
      width: 50px;
      .count{
        font-size: 20px;
        font-weight: bold;
      }
      .title{
        font-size: 14px;
      }
    }
  }
  .list{
    // margin: 20px;
    background-color: #efefef;
    .item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 10px;
      border: 1px solid #efefef;
      border-radius: 10px;
      background-color: white;
      margin-top: 10px;
      .name{
        width: 100px;
        text-align: center;
      }
      .status{
        text-align: center;
        flex: 1;
      }
      .time{
        width: 120px;
        text-align: center;
      }
      .action{
        width: 120px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .delete{
          border-radius: 10px;
          padding: 5px 10px;
          border: 1px solid darkgray;
        }
        .change{
          border-radius: 10px;
          padding: 5px 10px;
          border: 1px solid darkgray;
        }
      }
    }
  }
}
</style>
