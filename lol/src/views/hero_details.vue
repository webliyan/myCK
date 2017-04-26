<template>
	<!-- 英雄详情页 -->
	<div class="hero_details">
			<div class="header">
				<a href="javascript:void(0)" class="back" @click="toHero"></a>
				{{heroDate.title}}
			</div>	

		<div class="hero_img">
			<span class="hero_back" @click="toHero"></span>		
			<!-- 英雄图片 -->
			<img :src='pfurl+id+"-"+0+0+0+".jpg"'>
			<!-- 英雄属性 -->
			<div class="hero_attr">
				<!-- 英雄名字 -->
				<span class="hero_name" >{{heroDate.name}}</span>
				<!-- 英雄职业 -->
				<span class="hero_vocation">{{heroDate.tags[0]|getHeroType}}</span>
				<!-- 英雄攻击 -->
				攻：<span class="hero_gong">{{heroDate.info.attack}}</span>
				<!-- 英雄法术 -->
				法：<span class="hero_fa">{{heroDate.info.magic}}</span>
				<!-- 英雄防御 -->
				防：<span class="hero_fang">{{heroDate.info.defense}}</span>
				<!-- 英雄操作 -->
				操作：<span class="hero_cz">{{heroDate.info.difficulty}}</span>
			</div>
		</div>
		
		<!-- 详情描述 -->
		<div class="hero_details_des">
					<!-- 英雄技能和皮肤 -->
				<div class="hero_jn_pf">
						<!-- 英雄技能 -->
					<div class="hero_jn" :class="{xiahua:showJndes}" 
					 @click="toYX()">
						英雄技能
					</div>
						<!-- 英雄皮肤 -->
					<div class="hero_pf" :class="{xiahua:showPfdes}" @click="toPF()">
						皮肤欣赏
					</div>
				</div>	
				<!-- 技能介绍 -->
				<div class="hero_details_jn_des" v-show="showJndes">
					<!-- 图标和描述 -->
					<div class="hero_jn_icon">
						<span >技能介绍</span>
					</div>
					<!-- 技能图片和描述 -->
					<div class="hero_icon_des">
						<!-- 技能对应的图片 -->
						<div class="hero_detail_icon">
							<img :src="passive+passiveObj.image.full">
						</div>
						<!-- 技能的描述 -->
						<div class="hero_detail_des">
							<!-- 技能的介绍 -->
							<h3 class="hero_jn_jieshao">{{passiveObj.name}}</h3>
							<p>{{passiveObj.description}}</p>
						</div>					
					</div>
					<div class="hero_icon_des" v-for="item in heroDate.spells">
						<!-- 技能对应的图片 -->
						<div class="hero_detail_icon">
							<img :src="spell+item.image.full">
						</div>
						<!-- 技能的描述 -->
						<div class="hero_detail_des">
							<!-- 技能的介绍 -->
							<h3 class="hero_jn_jieshao">{{item.name}}</h3>
							<p>{{item.tooltip}}</p>
						</div>					
					</div>
					<!-- 图标和描述 -->
					<div class="hero_jn_icon">
						<span >技能加点推荐</span>
					</div>
					<!-- 推荐技能加点 -->
					<div class="jiadian" >
						<p v-for="(v,k) in heroDate.trait"><span class="leibie">{{k|getDianType}}:</span>{{v["add-point"]}}</p>				
					</div>
				</div>
				<!-- 皮肤介绍 -->
				<div class="hero_pf_des"  v-show="showPfdes">
					<!-- 图标和描述 -->
					<div class="hero_jn_icon">
						<span >点击皮肤可以观看介绍视频哦</span>
					</div>	
					<div class="hero_pf_img" 				
						v-for="(item,index) in heroDate.skins" v-if="index !== 0 "
>
						<!-- 图片 -->
						<div class="">						 
							<a href=""><img v-link="{path:item.displayUrl}" :src='pfurl+id+"-"+item.id+".jpg"'>
							</a>
						</div>
						<!-- 图片的标题 -->
						<div class="pf_title"><h4>{{item.name}}</h4></div>
					</div>
				</div>
		</div>
	</div>
</template>
<style lang="less">
	.hero_details {
		width: 100%;
		.hero_img {
			height: 371px;
			width: 100%;
			position: relative;
			overflow: hidden;
			.hero_back {
					position: absolute;
					width: 18px;
					height: 34px;
					background-image: url("../img/commonality/content/back.png");
					display: block;
					margin-top: -53px;
					margin-left: 33px;
					float: left;
			}
			img {
				width: 100%;
				// margin-top: -150px;
			}
			.hero_attr {
				height: 81px;
				width: 100%;
				background-color: rgba(0,0,0,.3);
				position: absolute;
				bottom: 0;	
				font-size: 29px;
				color: #ffffff;
				line-height: 81px;
				>span {
					padding: 0 10px;
				}
				.hero_name {
					margin-left: 10px;
				}
			}
		}

		.hero_details_des {
			width: 100%;
			.hero_jn_pf {
				overflow: hidden;
				>div {
					width: 228px;
					float: left;
					height: 79px;				
					font-size: 29px;
					line-height: 79px;
					text-align: center;
					margin-left: 95px;
				}
				.xiahua {
					color: #40a6fb;
					border-bottom: 4px solid #40a6fb;
				}
			}
		// 技能icon
				.hero_jn_icon {
					width: 100%;
					background-image: url("../img/private/introduce.png");
					height: 87px;
					background-repeat: no-repeat;
					line-height: 87px;
					background-color: #f0f0f0;
					background-position-x:14px;
					background-position-y:25px;
					>span {
						margin-left: 66px;
						font-size: 30px;
					}
				}
			// 技能介绍样式
			.hero_details_jn_des {
				width: 100%;
				
				.hero_icon_des {
					width: 100%;
					overflow: hidden;
					padding-bottom: 43px;
					border-bottom: 1px solid #f0f0f0;
					.hero_detail_icon {
						width: 25%;
						float: left;
						>img {
							width: 140px;
							height: 140px;
							margin-top: 75px;
							margin-left: 20px;
						}
					}
					.hero_detail_des {
						width: 75%;
						float: left;
						h3 {
							margin-top: 14px;
							font-size: 30px;
						}
						p {
							font-size: 23px;
							color: #adadad;	
							margin-top: 20px;				
							line-height: 39px;
						}

					}

				} 
				.jiadian {
						margin-top: 10px;
						>p {
							font-size: 29px;
							color: #a3a3a3;
							padding: 10px 32px;
							font-family: '黑体';
							letter-spacing:5px; // 字体间距
						}
					}
			}	
			//皮肤样式
			.hero_pf_des {
				background: #f0f0f0;
				.hero_pf_img {
					
					img {
						margin-left: 14px;
						width: 724px;
						height: 353px;
					}
				}
				.pf_title {
					margin:23px 0;
					h4 {
						width: 100%;
						text-align: center;
						font-size: 29px;
					}
				}
				padding-bottom: 8px;
			}
		}
		.active {
			display: none;
		}
}
</style>
<script type="text/javascript">
	import {mapActions} from 'vuex'
	import {getHeroType,pfUrl,getDianType,jnUrl} from '../filters'
	
	const passive='http://ossweb-img.qq.com/images/lol/img/passive/' //被动
	const spell='http://ossweb-img.qq.com/images/lol/img/spell/' //被动
	//对外暴露对象
	export default {
		created(){		
			this.$parent.complated = false;	
			this.showJndes = true;
			this.showPfdes = false;
			this.pf = true;
			
		},
		data(){
			return {		
				heroDate:[],
				passive,
				spell,
				passiveObj:"",
				fzpoint:"",
				zdpoint:"",
				showJndes:"",
				showPfdes:"",
				pfurl:"",
				id:""
			}
		},filters:{
			getHeroType,
			pfUrl,
			getDianType,
			jnUrl
		},
		mounted(){
			let id = this.$route.params.id;
			const  pfurl = "http://cdn.tgp.qq.com/pallas/images/skins/original/";
			this.pfurl = pfurl;
			this.id = id;
			this.ajax.get("/api/GetChampionDetail?champion_id="+id)
			.then(res=>{	
				var heroDate = res.data.data[0];
				this.heroDate =heroDate;
				this.passiveObj =  res.data.data[0].passive
				console.log(heroDate);
			},err=>{
				console.log(err);	
			});
			
		},	
		methods:{
		// 后退方法	
			toHero(){
				this.$router.go(-1);
			},		
			//切换皮肤技能标签
			toPF(){			
					this.showJndes = false;
					this.showPfdes = true;
			},
			// 切换英雄标签
			toYX(){			
				this.showJndes = true;
				this.showPfdes = false;
			}
		}
	}
</script>