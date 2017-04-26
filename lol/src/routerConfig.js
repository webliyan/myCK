//1、导入路由组件
import Landing from '../views/landing.vue'   //引导页面
import Index from '../views/index.vue'	//首页
import News from '../views/news.vue'		//资讯列表	
import Player from '../views/player.vue'	//玩家列表	
import Hero from '../views/hero.vue'		//英雄列表	
import Video from '../views/video.vue'		//视频列表



//2、导出配置信息
export default [
		{path:'/landing',component:Landing},
		{path:'/index',component:Index,
		 children:[
        	{path:'news',component:News},
        	{path:'player',component:Player},
        	{path:'hero',component:Hero},
        	{path:'video',component:Video}
        ]
	},
		
		{path:'*',redirect:'/landing'}

	]
