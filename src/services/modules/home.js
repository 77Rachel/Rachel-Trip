import hyRequest from '../request'

// 拿到热门城市数据
export function getHomeHotSuggests() {
  return hyRequest.get({ 
    url: "/home/hotSuggests" 
  })
}

// 拿到菜单图标
export function getHomeCategories() {
  return hyRequest.get({
    url: "/home/Categories"
  })
}

// 拿到首页具体数据
export function getHomeHouselist(currentPage) {
  return hyRequest.get({
    url: "/home/houselist",
    params:{
      page:currentPage
    }
  })
}
