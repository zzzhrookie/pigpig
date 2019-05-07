// 获取token
function getToken () {
  return localStorage.getItem('token')
}

// 日期格式化
function transDate () {
  let myDate, y, m, d, hh, mm, ss
  myDate = new Date()
  y = myDate.getFullYear()
  m = myDate.getMonth() + 1 // 月份从 0 - 11
  d = myDate.getDate()
  hh = myDate.getHours()
  mm = myDate.getMinutes()
  ss = myDate.getSeconds()
  m = addZero(m)
  d = addZero(d)
  hh = addZero(hh)
  mm = addZero(mm)
  ss = addZero(ss)
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 不足10，补0
function addZero (arg) {
  return arg < 10 ? '0' + arg : arg
}

export { getToken, transDate }
