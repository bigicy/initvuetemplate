// const appid = 'wxfe88b5accd262b3c'
// const appid = 'wx31ad7bca22e2cfce'
const appid = 'wx25a90f59d689738c'
const localurl = 'http://advert.qa.17usoft.com'
function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let url = window.location.href.split('#')[0]
  let search = url.split('?')[1]
  if(search){
    var r = search.substring(0).match(reg)
    if (r !== null){
      return decodeURIComponent(r[2])
    }
    return null
  }else{
    return null
  }
}

function getwxCode(){
  const code = getUrlParam('code')  // 截取路径中的code
  if (code == null || code === '') {
    const local = "http://wx.test.17u.cn"
    const locationHref = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=` + encodeURIComponent(localurl) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
    console.log('locationHref------',locationHref)
    // window.location.href = locationHref
  }
  console.log('code----',code)
  return code
}


export default  getwxCode
