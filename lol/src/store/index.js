import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const TOKEN = {
  "DAIWAN-API-TOKEN": "32133-23493-43483-4A83A"
}
axios.defaults.headers.common=TOKEN;
Vue.use(Vuex);

export default new Vuex.Store({
	//状态集合
	state:{
		title:'资讯',
		champtionList:[]

	 },
	 // 突变
	mutations: {//改变state里数据机制
		SET_TITLE:(state,title)=>{
			state.title = title
		},
		SETCHAMPIONLIST:(state,list)=>{
			state.championList=list
		}
	},
	// 方法集合
	actions: {
		setTitle:({commit},title)=>{
			commit('SET_TITLE',title)
		},
		setChamptionList:({commit})=>{
			axios.get('/api/champion')
			.then(res=>{
				commit('SETCHAMPIONLIST',res.data.data);
				console.log(res);
			},err=>{
				console.log(err);
			})
		}
	},
	// 获取状态
	getters:{
		msg:state=>state.title,
		championList:state=>state.championList	
	}
})
