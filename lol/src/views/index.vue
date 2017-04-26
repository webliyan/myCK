<template>
<div>
	<div v-if="complated" class="header">
		<a href="javascript:void(0)" class="back" @click="jump"></a>
		{{msg}}
	</div>
	<router-view></router-view>
	<div v-if="complated" class="footer">
		<router-link to="/index/news" class="news news_def" :class="{news_sel:newsel,news_del:!newsel}"></router-link>
		<router-link to="/index/player" class="player player_def" :class="{player_sel:playersel,player_del:!playersel}"></router-link>
		<router-link to="/index/hero" class="hero hero_def" :class="{hero_sel:herosel,hero_del:!herosel}"></router-link>
		<router-link to="/index/video" class="video video_def" :class="{video_sel:videosel,video_del:!videosel}"></router-link>
	</div>	
</div>
</template>
<style lang="less">
	/*头部样式*/
	.header {
		height: 75px;
		background: #40a6fb;
		font-size: 33px;
		text-align: center;
		line-height: 74px;
		width: 100%;
		color: #ffffff;
		a {
			position: absolute;
			width: 18px;
			height: 34px;
			background-image: url("../img/commonality/content/back.png");
			display: block;
			margin-top: 20px;
			margin-left: 33px;
			float: left;
		}
	}

	/*底部样式*/
	.footer {
		width: 100%;
		height: 90px;
		position: fixed;
		bottom: 0;
		overflow: hidden;
		background-color: #fafafa;
		box-shadow: 1px 0px 15px rgba(0,0,0,.1);
		a {
			display: inline-block;	
			float: left;
			background-size: cover;
			margin-top: 8.5px;
		}
	}
	
	/*资讯*/
	.news {
		width:41px;
		height: 73px;
		margin-left: 75px;				
	}
	/*玩家*/
	.player {
		width:41px;
		height: 73px;
		margin-left: 152px;
	}
	/*英雄*/
	.hero {
		width:41px;
		height: 73px;
		margin-left: 148px;			
	}
	/*视频*/
	.video {
		width:41px;
		height: 73px;
		margin-left: 147px;		
	}
	/*默认状态列表*/
	
	/*资讯列表默认bg	*/
	.news_def {
		background-image: url('../img/commonality/bottom/information.png');	
	}
	/*玩家列表默认bg*/
	.player_def {
		background-image: url('../img/commonality/bottom/player.png');	
	}

	/*英雄列表默认bg*/
	.hero_def {
		background-image: url('../img/commonality/bottom/hero.png');	
	}
	
	/*视频列表默认bg*/
	.video_def {
		background-image: url('../img/commonality/bottom/video.png');	
	}
	

	/*被选中状态列表*/
	
	/*资讯选中bg*/
	.news_sel {
		background-image: url('../img/commonality/bottom/pitch-information.png');	
	}
	/*玩家选中bg*/
	.player_sel {
		background-image: url('../img/commonality/bottom/pitch-player.png');	
	}
	/*英雄列表选中bg*/
	.hero_sel {
		background-image: url('../img/commonality/bottom/pitch-hero.png');	
	}
	/*视频列表选中bg*/
	.video_sel {
		background-image: url('../img/commonality/bottom/pitch-video.png');	
	}

</style>
<script type="text/javascript">
	import {mapGetters} from 'vuex'
	export default{
		created(){
			this.newsel = true;//选中
			this.videosel=this.parent.playersel=this.herosel = false;
		},
		name:'',
		data(){
			return {	
				complated: true,
				// newsel:true,
				
			}	
		},		
	watch:{
		$route(to,from){
			console.log(to.path);
			console.log(from);
		}
	},
	computed :{
		...mapGetters(['msg'])
	},
	methods:{			
			//跳转到首页
		jump(){
			this.$router.push({path:'/'});
		}
	}
}
</script>
