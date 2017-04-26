<template>
	<div class="video_map">
		<!-- 视频列表 -->
		<div class="video_lists" v-for="item in videoList">
			<!-- 视频条目 -->
			<a :href="item.url" class="video_items">
				<!-- 视频图片 -->
				<div class="video_img">
					<img :src="item.img" width="331px" height="220px">
				</div>
				<!-- 视频文本 -->
				<div class="video_con">
					<!-- 视频标题 -->
					<h3>{{item.title}}</h3>
					<div>
						 <!-- 日期 -->
						<span class="time">{{item.createdate.split("T")[0]}}</span> 
						<!-- 阅览数 -->
						<span class="read">{{Math.round(item.comments)}}评论</span>	
					</div>
				</div>		
			</a>	
		</div>
		
	</div>
</template>
<style lang="less">
.video_map {
	width: 100%;
}
	.video_lists {
		width: 50%;
		float: left;
		> a{
		
			display: inline-block;	
			text-decoration: none;	
			.video_img {
				margin-top: 17px;
				margin-left: 30px;			
			}
			.video_con {
				margin-left: 30px;
				h3 {
					text-overflow: ellipsis; //超出一行不显示
					font-size: 24px;
					color: #000;
					font-weight: 200;
					margin-top: 16px;
				}
				>div {
					overflow: hidden;
					margin-top: 15px;
					.time {
						color: #333333;
						margin-right: 50px;
						font-style: 16px;
					}
					.read {
						width: 100px;
						height: 20px;
						color:#40a6fb;
						font-size: 19px;
						float: right;
					}
				}
			}
		}
	}
</style>
<script type="text/javascript">
	import {mapActions} from 'vuex'
	import {videoList} from '../data/videolist'
	export default {
		created(){
			this.$parent.videosel = true;//选中
			this.$parent.herosel=this.$parent.playersel=this.$parent.newsel = false;
			this.setTitle("视频");
		},
		data(){
			return {
				videoList 		
			}
		},
		methods: {
			...mapActions(['setTitle'])
		}
	}
</script>

