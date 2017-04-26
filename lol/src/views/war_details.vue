<template>
	<!--  对战详情页面 -->
	<div>
		<div class="war">
			<div class="header">
				<a href="javascript:void(0)" class="back" @click="_back"></a>
				{{msg}}
			</div>
			<!-- 对战介绍 -->
			<div class="war_des">
				<div class="war_header">
					<span>开始时间: <span class="startTime"> {{battles.start_time.split(" ")[1].split(":")[0]+
					":"+battles.start_time.split(" ")[1].split(":")[1]}}</span></span>
					<span>总时长:<span class="sumTime">{{battles.duration|formatSeconds}}</span></span>
					<span>模式:<span class="model">{{battles.game_type|getGameType}}</span></span>
				</div>
				<!-- 战斗信息 -->
				<div class="zd_items" >
				<!-- 获胜方 击杀/死亡/助攻 -->
				<div class="war_detail">
						<!-- 战斗结果 -->
					<span class="war_result1">获胜方</span>
					<div class="war_details_img">
					     <img src="../img/private/icon3.png" >
						 <img src="../img/private/icon2.png" >
						 <img src="../img/private/icon1.png" >	
					</div>
				</div>
				<div class="zd_item" v-for="item1 in battleWin1">
						<!-- 所用英雄图片 -->
						<div class="zd_img">
							<img :src="item1.champion_id|duizhanUrl">
							<span>LV{{item1.level}}</span>
						</div>
						<!-- 用户名称和所使用英雄的技能 -->
						<div class="zd_des">
							<h4>{{item1.name}}</h4>	
							<!-- 技能图片 -->
							<div class="zd_icons">
								<!-- {{}} -->
								<img :src="item1.item0|jnUrl" alt=" ">
								<img :src="item1.item1|jnUrl" >
								<img :src="item1.item2|jnUrl" >
								<img :src="item1.item3|jnUrl" >
								<img :src="item1.item4|jnUrl" >
								<img :src="item1.item5|jnUrl" >
								<img :src="item1.item6|jnUrl" >
							</div>
						</div>
						<!-- 战绩  击杀 死亡 助攻 -->
						<div class="zd_zj">
							<!-- 击杀数 -->
							<span class="jisha">{{item1.champions_killed}}</span>
							/
							<!-- 死亡数 -->
							<span class="del">{{item1.num_deaths}}</span>
							/
							<!-- 助攻 -->
							<span class="zhugong">{{item1.assists}}</span>
						</div>
					</div>	
				</div>
					<!-- 战斗信息 -->
				<div class="zd_items">
				<!-- 获胜方 击杀/死亡/助攻 -->
				<div class="war_detail">
						<!-- 战斗结果 -->
					<span class="war_result2">失败方</span>
					<div class="war_details_img">
					     <img src="../img/private/icon3.png" >
						 <img src="../img/private/icon2.png" >
						 <img src="../img/private/icon1.png" >	
					</div>
				</div>
				<div class="zd_item" v-for="item2 in battleWin2">
						<!-- 所用英雄图片 -->
						<div class="zd_img">
							<img :src="item2.champion_id|duizhanUrl">
							<span>LV{{item2.level}}</span>
						</div>
						<!-- 用户名称和所使用英雄的技能 -->
						<div class="zd_des">
							<h4>{{item2.name}}</h4>	
							<!-- 技能图片 -->
							<div class="zd_icons">
								<img :src="item2.item0|jnUrl" >
								<img :src="item2.item1|jnUrl" >
								<img :src="item2.item2|jnUrl" >
								<img :src="item2.item3|jnUrl" >
								<img :src="item2.item4|jnUrl" >
								<img :src="item2.item5|jnUrl" >
								<img :src="item2.item6|jnUrl" >
							</div>
						</div>
						<!-- 战绩  击杀 死亡 助攻 -->
						<div class="zd_zj">
							<!-- 击杀数 -->
							<span class="jisha">{{item2.champions_killed}}</span>
							/
							<!-- 死亡数 -->
							<span class="del">{{item2.num_deaths}}</span>
							/
							<!-- 助攻 -->
							<span class="zhugong">{{item2.assists}}</span>
						</div>
					</div>	
				</div>
				</div>
			</div>
		</div>
	</div>
	
</template>
<style lang="less">
	.war_des {
		width: 100%;
		// 头部样式
		.war_header {
			width: 100%;
			height: 80px;
			background-color: #f0f0f0;
			font-size: 28px;
			color: #000;
			>span {
				width: 30%;
				padding-left: 15px;
				height: 80px;
				line-height: 80px;
				display: inline-block;
			}

		}
		// 头部的详情信息
		.war_detail {
			width: 100%;
			height: 93px;
			border-bottom: 1px #e1e1e1 solid ;
			overflow: hidden;
			>span {
				margin-left: 18px;
				width: 144px;
				height: 55px;
				text-align: center;
				line-height: 55px;
				font-size: 28px;
				color: #ffffff;
				margin-top: 20px;
				display: inline-block;
				float: left;
				// background-color: #ff9900;
			}
			.war_result1 {
				background-color: #ff9900;
			}
			.war_result2 {
				background-color: #ccc;
			}
			.war_details_img {
				overflow: hidden;
				margin-top: 30px;
				float: right;
				margin-right: 30px;
				img {
					width: 38px;
					padding: 0 10px;
					float: left;
					
				}
			}
		}
		//战斗信息
		.zd_items {
				width: 100%;
			.zd_item {
				position: relative;
				width: 100%;
				padding: 9px 0;
				overflow: hidden;
				//所使用英雄图片

				.zd_img {
					margin-left: 19px;
					
					float: left;
					width: 19%;
					img {
						width: 125px;
						height: 126px;
					}
					>span {
						margin-top: -3px;
						width: 123px;
						height: 53px;
						border:1px solid #24a723;
						font-size: 24px;
						text-align: center;
						line-height: 53px;
						color: #000;	
						display: block;
					}
				}
				//战斗描述
				.zd_des {	
					width: 78%;
					border-bottom: 1px #e1e1e1 solid ;
					float: left;
					h4 {
						color: #000;
						padding-left: 15px;
						padding-top: 35px;
						padding-bottom: 50px;
						font-size: 29px;
					}
					.zd_icons {
						overflow: hidden;
						img {
							width: 50px;
							height: 50px;
							margin: 0 10px;
							float: left;
						}
						padding-bottom: 25px;
					}
				}
				//战绩
				.zd_zj {
					font-size: 24px;
					color:#a5a5a5;
					position: absolute;
					top:40%;
					right: 36px;
				}
			}
		}
	}
</style>
<script type="text/javascript">
import {mapActions} from "vuex"
import {getAreaName,PlayerUrl,jnUrl,getWin,getGameType,duizhanUrl,formatSeconds} from "../filters"
	export default {
		created(){
			// this.setTitle('对战详情');	
			this.msg ="对战详情";
			this.$parent.complated = false;	
		},
		mounted(){
				let qquin = this.$route.params.qquin;
				let areaName = this.$route.params.area_id;	
				let gameid = this.$route.params.game_id;
				this.ajax.get("/api/GameDetail?qquin="+qquin+"&vaid="+areaName+"&gameid="+gameid).then(res=>{	
					var battle = res.data.data[0].battle.gamer_records;
					var battles =res.data.data[0].battle;
					this.battles = battles;		
					var battle_win1 = battle.slice(0,5);//胜利方
					var battle_win2 = battle.slice(5);//失败方	
						this.battleWin1 = battle_win1;
						this.battleWin2 = battle_win2;
						var arr1 = [];
						for(let i = 0 ;i<battle_win1.length;i++){				
							arr1.push(battle_win1[i].item0)
						}	
						console.log(battle_win1);
						this.ajax.get("/api/GetitemIcon?itemid="+arr1[1]).then(res=>{
							console.log(res.data.data[0].return);
							this.url1 = res.data.data[0].return;	
						},err=>{

						});
				},err=>{
					console.log(err)
				});
		},
		computed:{
			
		},
		filters:{
			getAreaName,
			PlayerUrl,
			getWin,
			getGameType,
			duizhanUrl,
			jnUrl,
			formatSeconds	
		},
		data(){
			return {	
				battleWin1:[],
				battleWin2:[],
				battles:[],
				url1:""
			}
		},
		methods:{
			_back(){
				this.$router.go(-1);
			}
		}

	}
</script>


