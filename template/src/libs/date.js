export default function getDate() {
  var timezone = 8
  var offset_GMT = new Date().getTimezoneOffset()
  var nowDate = new Date().getTime()

  var today = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000)
  var date = today.getFullYear() + "-" + twoDigits(today.getMonth() + 1) + "-" + twoDigits(today.getDate())
  var time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds())
  return date + " " + time
}

function twoDigits(val) {
  if (val < 10) return "0" + val
  return val
}

/**
 * 时间戳转化为年 月 日 时 分 秒
 * number: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 */
export function formatTime(number, format) {
  var formateArr = ["Y", "M", "D", "h", "m", "s"]
  var returnArr = []

  var date = new Date(number * 1000)
  returnArr.push(date.getFullYear())
  returnArr.push(formatNumber(date.getMonth() + 1))
  returnArr.push(formatNumber(date.getDate()))

  returnArr.push(formatNumber(date.getHours()))
  returnArr.push(formatNumber(date.getMinutes()))
  returnArr.push(formatNumber(date.getSeconds()))

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i])
  }
  return format
}

//数据转化
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : "0" + n
}
