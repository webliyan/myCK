import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../views/landing.vue'
import Index from '../views/index.vue'
import { InfiniteScroll } from 'mint-ui';
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

//资讯
import News from '../views/news.vue'
// 玩家
import Player from '../views/player.vue'
//英雄
import Hero from '../views/hero.vue'
//视频
import Video from '../views/video.vue'
//召唤师详情页
import PlayerDetails from '../views/player_details.vue'
//英雄详情页
import HeroDetails from '../views/hero_details.vue'    
//对战详情页
import WarDetails from '../views/war_details.vue'
Vue.use(InfiniteScroll);
Vue.use(Router);




export default new Router({
    routes: [{
        // 盲僧界面
        path: '/',
        component: Landing
    }, {
        path: '/index',
        component: Index,
        children: [{
                path: 'news',
                component: News
            },
            { path: 'player', component: Player},
            { path: 'player/playerdetails/:qquin/:area_id', component: PlayerDetails},
            { path: 'player/wardetails/:qquin/:area_id/:game_id', component: WarDetails},
            { path: 'hero', component: Hero },
            { path: 'hero/herodetails/:id', component: HeroDetails},
            { path: 'video', component: Video }
        ]
    }]
})
