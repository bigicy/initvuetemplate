import Vue from "vue"
import Vuex from "vuex"
// import VuexPersistence from "vuex-persist"
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// })
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {
      username: "",
      department: "",
      departmentId: "",
      userId: "",
      workId: "",
      newWorkId: "",
      gender: "",
      email: "",
      deptLevelId: "",
      deptLevelName: "",
      phoneNumber: "",
    },
    // 位置
    position: "",
    // 经纬度
    location: [],
    // 是否可打卡  -1定位失败  0定位状态  1可以打卡   2不可打卡
    canPunchCard: 0,
    // 打卡车站
    punchStation: {
      stationId: ''
    },
    // 打卡状态
    hasPunchCard: false,
    // 车站列表
    stationList: [],
  },
  getters: {
    userInfo: (state) => {
      return state.userInfo
    },
    position: (state) => {
      return state.position
    },
    location: (state) => {
      return state.location
    },
    canPunchCard: (state) => {
      return state.canPunchCard
    },
    punchStation: (state) => {
      return state.punchStation
    },
    hasPunchCard: (state) => {
      return state.hasPunchCard
    },
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data
    },
    setPostion(state, data) {
      state.position = data
    },
    setLocation(state, data) {
      state.location = data
    },
    setCanPunchCard(state, data) {
      state.canPunchCard = data
    },
    setPunchStation(state, data) {
      state.punchStation = data
    },
    setHasPunchCard(state, data) {
      state.hasPunchCard = data
    },
  },
  actions: {},
  modules: {},
  plugins: [],
})
