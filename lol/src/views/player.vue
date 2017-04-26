<template>
	<div>
		<!-- 搜索div -->
		
		<div class="search">
			<form>
				<!-- 输入框 -->
				<input type="text" name="heroSearch" class="entry"
				 placeholder="搜索召唤师" v-model="name">
				<!-- 提交btn -->
				<input @click.prevent="search" type="submit" name="" value="搜索" class="subBtn">
			</form>		
		</div>
		<!-- 无数据的时候展示的界面 -->
		<div class="sea_data_null">
				<!-- 显示图片 -->
				<span></span>
				<p>暂时木有内容~</p>
		</div>
			<!-- 搜索内容展示div -->	
		<div class="sea_con" v-for="item in items">
			<!-- 搜索内容条目	 -->
			<div class="sea_item" @click="toPlayerDetails(item)">
				<!-- 搜索英雄的头像	 -->
				 <div class="sea_img">
				 	<img alt="无法显示" :src="item.icon_id|headUrl">
				 </div>
				 <!-- 搜索英雄的描述 -->
				 <div class="sea_des">
				 		<h3>{{item.name}}</h3>
				 		<!-- 描述详情 -->
				 		<div class="sea_details">
				 			<!-- 所在服务器 -->
				 			<div class="sea_server">{{item.area_id|getAreaName}}</div>
				 			<!-- 等级 -->
				 			<div class="sea_ji">等级<span>{{item.level}}</span></div>
				 		</div>
				 </div>
				 <!-- 条目的线 -->
				 <p class="sea_xian"></p>
			</div>;
		</div>
	</div>	
</template>
<style lang="less">
	// 搜索div样式
	.search {
		width: 100%;
		height: 105px;
		position: relative;
		background: #40a6fb;
		line-height: 105px;
		text-align: center;

		// 输入框样式
		.entry {
			width: 627px;
			height: 69px;
			font-size: 29px;
			color: #787878;
			border-radius: 5px;
			padding-left: 36px;
			background-image: url("../img/commonality/content/search.png");
			background-repeat: no-repeat;
			background-position-x: 559px;
			background-position-y: 25px;
		}
			//提交按钮
		.subBtn {
			width: 87px;
			height: 69px;
			line-height: 69px;
			text-align: center;
			color: #40a6fb;
			font-size: 24px;
			background-color: rgba(255,255,255,0);
			position: absolute;
			top:13px;
			right: 42px;
			border-radius: 5px;
			border:0;
		} 

	}
	//无数据时候的样式
	.sea_data_null {
		width: 100%;
		text-align: center;
		padding: 50% 0 ;
		span {
			width: 151px;
			height: 151px;
			background-image: url("../img/private/player.png");
			display: inline-block;
			
		}
		p {
			font-size: 17px;
			color: #666666;
			margin-top: 40px;
		}

	}
	// 搜索的内容样式
	.sea_con {
		width: 100%;
		.sea_item {
			width: 100%;
			overflow: hidden;
			// border-bottom: 1px solid #e1e1e1;
			
			position: relative;			
			>div {
				padding-top: 45px;
				padding-bottom: 20px;
				float: left;
			}
			// 头像div
			.sea_img {	
				padding-left: 41px;
				img {
					width: 101px;
					height: 101px;			
					border-radius: 50%;
				}
			}
			//描述div
			.sea_des {	
				padding-left: 36px;
				// 英雄名称
				h3 {
					padding-top: 10px;
					padding-bottom: 24px;
					font-size: 29px;
				}

				>div {			
					>div {
						display: inline-block;
						color:#949494;
						font-size: 23px;
					}
					//等级
					.sea_ji {
						padding-left: 20px;
					} 
				}
			}
			.sea_xian {
				width: 700px;
				height: 1px;
				bac
				kground: #e1e1e1;
				position: absolute;
				bottom: 1px;
				left: 50px;
			}
		}	
	}

</style>
<script type="text/javascript">
	import {mapActions} from 'vuex'
	import {getAreaName,headUrl} from '../filters'
	export default {
		created(){
			this.setTitle('玩家');
			this.$parent.complated = true;
			this.$parent.playersel = true;
			this.$parent.videosel=this.$parent.newsel=this.$parent.herosel = false;

		},
		
		computed:{
			...mapActions(['msg']),//加上三个点 在当前computed里上了一个属性
		},
		data(){
			return {
				name:''	,
				items:[],

			}	
		},
		filters:{
			getAreaName,
			headUrl
		},
		methods: {

			...mapActions(['setTitle']),
			search(){	
				var input = document.getElementsByClassName("entry")[0]
			if(input.value==""){
				alert("请输入内容");	
				   console.log(this.ajax);		
			}else {			
				var keyword = input.value;
				 console.log(keyword);
		        var url = "/api/UserArea?keyword="+this.name;
		        this.ajax.get(url)
                .then(res=>{
                	var data = res.data.data;    	
                	var sea_data_null = document.getElementsByClassName("sea_data_null")[0];
                	console.log(sea_data_null);	
                	sea_data_null.style.display = 'none';
                	var sea_con = document.getElementsByClassName("sea_con")[0];
                	this.items = data;  
                },err=>{
                	console.log(err);

                })
			}
		},
		toPlayerDetails(item){
			this.$router.push({path:`/index/player/playerdetails/${item.qquin}/${item.area_id}`});
		}
	}
 }
</script>