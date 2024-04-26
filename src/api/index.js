//封装的请求方法
import base,{host360} from './base'
//console.log(base,host);

import axios from '@/utils/request'


//定义方法
export default{
//热门城市 
    getHotCity(){
        return axios.get(base.hotcity)
    },//参数:{&keyword=q}
    getSearch(params){
        return axios.get(base.search,{
            params
        })
    },
    // 今日推荐
    getTodyInfo(){
        return axios.get(base.todayInfo);
    },
    //参数?page=1
    getHomeShop(params){
        return axios.get(base.homeShop,{
            params
        })
    },
    getDestSearch(params){
        return axios.get(base.destSearch,{
            params
        });
    },
    getTop10(){
        return axios.get(base.Top10)
    },
    getCommunity(){
        return axios.get(base.Community)
    },
    gettoMove(){
        return axios.post(base.to_move,{
            
        },{headers:{
            'keyword':'',
            'page':1
           
        }})
    },
    getkeytxt(){
        return axios.get(base.keytxt)
    },
    getand(){
        return axios.get(base.and)
    }
}

export function demo(){
    console.log('单个导出');
}
