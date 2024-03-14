import dayjs from 'dayjs'

// 日期格式化
export function formatMonthDay(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr)
}

// 天数计算
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}

// 计算周几
export function getWeekDay(date) {
  return "周" + "日一二三四五六".charAt(dayjs(date).day())
}
