import hyRequest from '../request'

// 详情页每间房的数据
export function getDetailInfos(houseId) {
  return hyRequest.get({ 
    url: "/detail/infos",
    params: {
      houseId
    } 
  })
}