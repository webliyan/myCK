<template>
	<!-- 召唤师详情页 -->
	<div>
		<div class="player_details">
			<!-- 召唤师详情页头部 -->
			<div class="player_details_header">
				<!-- 顶部 -->
				<div class="player_details_top">				
					<a href="javascript:void(0)" class="back" @click="_go"></a>
						{{playerInfo.name}}
				</div>
				<!-- 顶部内容 -->
				<div class="player_details_con">
					<img :src="playerInfo.icon|PlayerUrl">
					<h3><span>{{playerInfo.level}}</span>级</h3>
					<!-- 服务器和段位 -->
					<p class="player_details_qu_dw">
						<span class="fuwuqi">{{this.getAreaName(this.$route.params.area_id)}}</span>  <!-- 服务器 -->
						<span class="duanwei">{{duanwei.return}}</span> <!-- 段位 -->
					</p>
					<!-- 战斗力和赞 -->
					<p class="player_details_zdl_zan">
						战斗力:<span class="zhandou">{{playerInfo.power_value}}</span>
						赞:<span class="zan">{{playerInfo.praise_num}}</span>
					</p>
				</div>
			</div>
			<!-- 召唤师数据 -->
			<div class="player_details_dates">
				<!-- 数据条目 -->
				<div class="player_details_dateitem">
					 <!-- 3连杀背景图 -->
					<span class="triple_kill_bg"></span> 
				   	<!-- 连杀次数 -->
					<p>三杀：<span class="triple_kill">{{jisha.triple_kills}}</span></p> 
				</div>
				<div class="player_details_dateitem">
					 <!-- 4连杀背景图 -->
					<span class="quadra_kill_bg"></span> 
				   	<!-- 连杀次数 -->
					<p>四杀：<span class="quadra_kill">{{jisha.quadra_kills}}</span></p> 
				</div>
				<div class="player_details_dateitem">
					 <!-- 5连杀背景图 -->
					<span class="penta_kill_bg"></span> 
				   	<!-- 连杀次数 -->
					<p>五杀：<span class="penta_kill">{{jisha.penta_kills}}</span></p> 
				</div>
				<div class="player_details_dateitem">
					 <!-- 总击杀背景图 -->
					<span class="kills_total_bg"></span> 
				   	<!-- 击杀次数 -->
					<p>总击杀：<span class="kills_total">{{jisha.kills_total}}</span></p> 
				</div>
				<div class="player_details_dateitem">
					 <!-- mvp背景图 -->
					<span class="assists_total_bg"></span> 
				   	<!-- 次数 -->
					<p>MVP：<span class="kills_total">{{jisha.ward_placed_total}}</span></p> 
				</div>
				<div class="player_details_dateitem">
					 <!-- 超神背景图 -->
					<span class="god_like_num_bg"></span> 
				   	<!-- 超神次数 -->
					<p>超神：<span class="kills_total">{{jisha.god_like_num}}</span></p> 
				</div>
			</div>
			<!-- 召唤师战绩 -->
			<div class="sea_con"  
			>
			<!-- 搜索内容条目	 -->
			<div class="sea_item" v-for="(item,index) in bisai" @click="toWarDetails(index)">
				<!-- 搜索英雄的头像	 -->
				 <div class="sea_img">
				 <img alt="无法显示" :src="item.champion_id|duizhanUrl">
				 </div>
				 <!-- 搜索英雄的描述 -->
				 <div class="sea_des">
				 		<!-- 战果 -->
				 		<h3 :class="{green:(item.win==1?false:true),red:(item.win==1?true:false)}" name="zhanji">{{item.win|getWin}}</h3>
				 		<!-- 描述详情 -->
				 		<div class="sea_details">
				 			<!-- 排位赛 -->
				 			<span class="sea_details_paiwei">{{item.game_type|getGameType}}</span>				 			
				 		</div>
				 		<span class="player_jiantou"></span>
				 </div>
				 <!-- 条目的线 -->
				 <p class="sea_xian"></p>
			</div>;
		</div>
		</div>	
	</div>
</template>
<script type="text/javascript">
	import {mapActions} from 'vuex'
	import {getAreaName,PlayerUrl,getWin,getGameType,duizhanUrl} from "../filters"	
	export default {
		created(){			
			this.$parent.complated = false;	
			this.msg="详情页"	
		},
		name:'',
		data(){
			return {	
				id:"",	
				playerInfo:[],//召唤师信息
				duanwei:[],	//段位信息
				jisha:[],	//击杀信息
				bisai:[],  //用户战斗信息
				win:[]
			}
		},
		filters:{
			getAreaName,
			PlayerUrl,
			getGameType,
			getWin,
			duizhanUrl
		},
		mounted(){
			let qquin = this.$route.params.qquin;
			let areaName = this.getAreaName(this.$route.params.area_id);		
			//用户信息简
			this.ajax.get("/api/UserHotInfo?qquin="+qquin+"&vaid="+this.$route.params.area_id).then(res=>{
				this.playerInfo = res.data.data[0];
				//段位请求	
				this.ajax.get("/api/GetTierQueue?tier="+this.playerInfo.tier+"&queue="+this.playerInfo.queue).then(res=>{
					this.duanwei = res.data.data[0];						
				},err=>{
					console.log(err);
				})	
			},err=>{
				console.log(err)
			});
			//用户详情请求
			this.ajax.get("/api/UserExtInfo?qquin="+qquin+
				"&vaid="+this.$route.params.area_id)
			.then(res=>{	
				this.jisha = res.data.data[1];	
			});
			//用户战斗信息请求
			this.ajax.get("/api/CombatList?qquin="+qquin+
				"&vaid="+this.$route.params.area_id+"&p="+0)
			.then(res=>{				
				console.log(res.data.data[0].battle_list);
				var date = res.data.data[0].battle_list
				this.bisai = date;
				console.log('=================');
				// console.log(date)
				this.win = date.win;
			});	

		},
		methods: {
			// loadMore() {
			// 	 this.loading = true;
			// 	 setTimeout(() => {
			// 	    let last = this.bisai[this.bisai.length - 1];
			// 	    for (let i = 1; i <= 10; i++) {
			// 	      this.bisai.push(last + i);
			// 	    }
			// 	    this.loading = false;
			// 	  }, 2500);	
			// },
			_go(){
				 this.$router.push({path:'/index/player'});
			},
			...mapActions(['setTitle']),
			getAreaName,
			// 跳转到对战详情页面
			toWarDetails(index){
				let item = this.bisai[index]
			    this.$router.push({path:`/index/player/wardetails/${this.playerInfo.qquin}/${this.playerInfo.area_id}/${item.game_id}`});
			}
		}
	}
</script>

<style lang="less">
.red {
	color: red;
}
.green{
	color: green;
}
.player_jiantou {
	width: 13px;
	height: 23px;
	background-image: url('../img/private/right.gif');
	background-size: cover;
	position: absolute;
	display: block;
	top:50%;
	right: 40px;
}
	.player_details {
		width: 100%;
		// 头部
		.player_details_header {
			width: 100%;
			height: 430px;
			background-image: url("../img/private/BG.png");
			background-size: cover;
			// 头部顶部样式
			.player_details_top {
				height: 75px;
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
			// 头部内容样式
			.player_details_con {
				width: 100%;
				text-align: center;
				color: #ffffff;
				img {
					margin-top: 50px;
					width:130px;
					height: 130px;
					border-radius: 50%;
					background: #ccc;
				}
				h3 {
					margin-top: 15px;
					font-size: 29px;
				}
				p {
					font-size: 24px;
				}
				.player_details_qu_dw {
					margin-top: 25px;
					.fuwuqi {
						margin-right: 20px;
					}
				}
				.player_details_zdl_zan {
					margin-top: 14px;
				}
			}
		}
		//召唤师数据
		.player_details_dates {
			width: 100%;
			overflow: hidden;
			border-bottom: 1px solid #e1e1e1;
			.player_details_dateitem {
				width: 33%;
				float: left;
				// 几连杀背景图样式
				>span {
					width: 68px;
					margin-left: 111px;
					margin-top: 44px;
					height: 68px;
					display: block;
					background-image: url("../img/private/achievability.png");				
				}
				// 各个不同连杀背景图样式
				// 三杀背景图
				.triple_kill_bg {
					background-position: -5px 0;
				}
				// 四杀背景图
				.quadra_kill_bg {
					background-position: -86px 0;
				}
				// 五杀背景图
				.penta_kill_bg {
					background-position: -170px 0;	
				}
				// 总击杀次数背景图
				.kills_total_bg {
					background-position: -5px -135px;
				}
				// mvp次数背景图
				.assists_total_bg {
					background-position: -86px -135px;
				}
				// 超神次数背景图
				.god_like_num_bg {
					background-position: -170px -138px;	
				}
				>p {
					font-size: 22px;
					color: #000;
					margin-left: 94px;
					margin-top: 29px;
					margin-bottom: 33px;	
					span {
						font-size: 27px;
					}		
				}
			}
		}
		//战绩
		.sea_details_paiwei {
			font-size: 24px;
			color: #bebebe;
		}
	}
</style>
