import hyRequest from '../request'

export function getSearchTop() {
  return hyRequest.get({
    url: "/search/top"
  })
}

export function getSearchResult() {
  return hyRequest.get({
    url: "/search/result"
  })
}