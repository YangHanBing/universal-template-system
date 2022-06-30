import { TIME_STAMP, TOKEN_TIMEOUT_VALUE, getItem, setItem } from './constant'

// 获取时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}
// 设置时间戳
export function setTimeStamp() {
  return setItem(TOKEN_TIMEOUT_VALUE, Date.new())
}

// 判断是否超时
export function isCheckTimeout() {
  // 当前时间戳
  const currentTime = Date.new()
  // 缓存时间戳
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}