//公共接口



//导出整个对象
const base={
    host360:'https://bang.360.cn',
    hotcity:'/api/aj/getcitycode',//热门城市
    search:'/foo/qcross/place/public.php?action=placesearch&client=web',//搜索框
    todayInfo:'/foo/qcross/home/index.php?action=recommend',
    homeShop:'/foo/qcross/home/index/recommendbiz',//首页穷游商城
    destSearch:'/boo/qcross/place/public.php?action=placesearch&client=web',//目的地搜索
    Top10:'/boo/qcross/place/public.php?action=placetop10',
    Community:'/poo/index.php?action=getTravels&page=1',//
    to_move:'/too/api/search/indexSearch',//方形大Tag?keyword=&page=1
    and:'/poo/index.php?action=getTogether&page=1'
   
}
export default base

// 另外的写法【单个属性】
export const host360 = 'https://bang.360.cn';