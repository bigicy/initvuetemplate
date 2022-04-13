import { Axios as http } from "./http"
// 获取回收物料信息
function getRecycleInfo(data) {
  return new Promise((resolve, reject) => {
    let params = {
      method: "post",
      url: "/recycleInInfo" ,
      data: data
    }
    http(params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
// 获取回收列表
function getRecycleList(data) {
  return new Promise((resolve, reject) => {
    let params = {
      method: "post",
      url: "/recycleList" ,
      data: data
    }
    http(params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
// 获取回收数目新
function getRecycleNumber(data) {
  return new Promise((resolve, reject) => {
    let params = {
      method: "post",
      url: "/recycleNumber" ,
      data: data
    }
    http(params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
// 获取回收物料详情
function getRecycleDetail(data) {
  return new Promise((resolve, reject) => {
    let params = {
      method: "post",
      url: "/recycleDetail",
      data: data
    }
    http(params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 图片上传
function uploadImgData(data) {
  return new Promise((resolve, reject) => {
    let params = {
      method: "post",
      url: "/uploadImg3" ,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    http(params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
// 资料上传
function uploadTotalData(data) {
  return new Promise((resolve, reject) => {
    let params = {
      method: "post",
      url: "/uploadData" ,
      data: data
    }
    http(params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}


export default ({
  getRecycleInfo,
  getRecycleList,
  getRecycleNumber,
  getRecycleDetail,
  uploadImgData,
  uploadTotalData
})
