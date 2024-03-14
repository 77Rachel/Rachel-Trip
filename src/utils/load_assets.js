export const getAssetURL = (image) => {
  // 参数:相对路径,当前文件路径
  return new URL(`../assets/img/${image}`,import.meta.url).href
}
