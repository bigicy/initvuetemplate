<template>
  <div class="upload">
    <navbar :title="title"></navbar>
    <div class="title">基本信息</div>
    <div v-if="data.type === 1">
      <div>
        <van-field v-model="formData.licenseNO" required
                  name="车牌号" label="车牌号" placeholder="车牌号" />
      </div>
      <div class="tip">
        <div class="name">车头带车牌照片一张</div>
        <div class="content">需要带完整车牌</div>
      </div>
    </div>
    <div v-if="data.type === 2">
      <div>
        <van-field v-model="formData.stationName" readonly
                  name="车站名称" label="车站名称" />
      </div>
      <div class="tip">
        <div class="name">车站门头照片一张</div>
        <div class="content">需要带完整车站名称</div>
      </div>
    </div>
    <div class="upload">
      <van-uploader v-model="formData.boardLoader" :deletable="false"
            :after-read="afterReadBoard" preview-size="70" :preview-image="true"
      />
    </div>
    <div class="tip">
      <div class="name">物料点位照片(请勿重复,最多6张)</div>
      <div class="content">物料占照片1/5位置</div>
    </div>
    <div class="upload">
      <van-uploader v-model="formData.supplyLoader" :max-count="6" :deletable="false"
            :after-read="afterReadSupply" preview-size="70" :preview-image="true"
      />
    </div>
    <div class="action">
      <div class="cancel" @click="cancelAction">取消</div>
      <div class="sumbit" @click="submitAction">提交</div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue"
export default {
  components:{
    navbar
  },
  data(){
    return {
      title: '上传信息-苏州汽车南站',
      formData:{
        licenseNO: '', // 车牌号
        stationName: '苏州汽车南站', // 车站名称
        boardLoader:[ // 门头照片
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg',deletable: true, },
        ],
        supplyLoader:[ // 物料照片
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg',deletable: true, },
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg',deletable: true, },
        ],
      }
    }
  },
  computed:{
    data(){
      return this.$route.params.data || {
          name: '苏州汽车南站',
          type: 2,
          status: 2,
          time: '2022-04-11 13:34:56'
        }
    }
  },
  methods:{
    afterReadBoard(file){
      console.log('file----',file)
    },
    afterReadSupply(file){
      console.log('file----',file)
    },
    // 取消
    cancelAction(){
      this.$router.go(-1)
    },
    // 提交
    submitAction(){
      if(!this.formData.licenseNO){
         this.$toast({ message: '请输入车牌号', position: 'bottom'});
      }
    }
  }
}
</script>

<style scoped>

</style>
