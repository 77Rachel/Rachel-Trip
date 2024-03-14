import hyRequest from '../request'

export function getOrderType(type = "all") {
  return hyRequest.get({
    url: `order/list?type=${type}`
  })
}