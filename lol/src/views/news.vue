<template>			
		<!-- 资讯列表 -->
	<div>	
		<div>		
			<!-- 轮播插件 -->
			<swiper :options="swiperOption" >
				<!--  : == v-bind: 绑定属性可以用到data中的数据 -->	
				<swiper-slide v-for="item in bannerNews " >
					<a :href="item.article_url">
						<img width="100%" height="20%" :src="item.image_url_big" >
					</a>
				</swiper-slide>
				<div  class="swiper-pagination" slot="pagination" ></div>
			</swiper>	
		</div>
		<!-- 图文模块 -->
		<div class="news_content" v-for="item in newsList">
			<!-- 条目 -->
				<a :href="item.article_url" class="news_item">			
					<!-- 图片 -->
					<div class="imgItem">
						<img :src="item.image_url_big">
					</div>
					<!-- 内容 -->				
					<div class="conItem">
						<h3>{{item.title}}</h3> 
						<h4>{{item.summary}}</h4>
						<div>
							 <!-- 日期 -->
							<span class="time">{{item.publication_date.split(" ")[0]}}</span> 
							<!-- 阅览数 -->
							<span class="read">{{Math.round(item.pv/10000)}}万阅</span>	
						</div>
					</div>									
				</a>
		</div>
			
	</div>
</template>
<style lang="less">
	.swiper-container{
		.swiper-pagination-bullet{
		background: #ffffff;
		opacity: 1;
		}
		.swiper-pagination-bullet-active{
		background: blue;
		opacity: 1;
		}
	}
	
	// 图文
	.news_content {
		width: 100%;
		a {
			width: 100%;
			border-top: 2px solid #f0f0f0;
			margin-top: -2px;
			overflow: hidden;
			display: block;
			//图片
			.imgItem {
				margin: 11px;
				float: left;
				background-color: #ccc;
				width:150px;
				height: 130px;
				img {
					width:150px;
					height: 130px;
				}
			}
			//内容
			.conItem {
				margin: 11px;
			
				width: 550px;
		
				float: left;
				h3 {
					font-size: 29px;
					color: #000;
					font-weight: 700;
					margin-top: 2px;
					text-overflow: ellipsis; //超出一行不显示
				}
				h4 {
					font-size:25px;
					margin-top: 17px;
					color: #000;
					font-weight: 300;	
					//超过2行不显示
					 overflow: hidden;
				    display: -webkit-box;
				    -webkit-line-clamp: 2;
				    -webkit-box-orient: vertical;
				    word-break: break-all;
				}
				>div {
					margin-top: 22px;
					span {
						font-size: 20px;
						display: inline-block;

					}
					.time {
						width: 133px;
						height: 20px;
						margin-right: 50px;
						color: #333333;
					}
					.read {
						width: 100px;
						height: 20px;
						color:#40a6fb;
					}
				}
			}
		}
	}

</style>
<script type="text/javascript">
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import {bannerNews} from '../data/banner'
	import {newsList} from '../data/newslist'
	import {mapActions} from 'vuex'
	//对外暴露对象
	export default {
		created(){
			this.setTitle("资讯");
			this.$parent.newsel = true;//选中
			this.$parent.videosel=this.$parent.playersel=this.$parent.herosel = false;
			console.log(!this.$parent.videosel);
		},
		data(){
			return {
				swiperOption: {
					autoplay : 3000,
					pagination:'.swiper-pagination',
					paginationClickable: true,
					 //滑动轮播图之后让图片继续滑动
					autoplayDisableOnInteraction:false			
				},
				bannerNews ,
				newsList
				// msg : "资讯"
			}
		},
		methods:{
			...mapActions(['setTitle'])
		},
		computed:{
			
		},
		components: {
			swiper,
			swiperSlide			
		}
	}
	
</script>