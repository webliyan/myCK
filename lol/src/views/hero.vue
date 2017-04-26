<template>
	<!--  （英雄列表） -->
	<div class="heros">
		<!-- 英雄头像描述 -->
		<div class="hero_map"  @click="goHeroDetails(item)" v-for="item in items">
			<div class="hero_items" >
					<!-- 头像	 -->
					<div class='hero_img'>
					<img :src= "img_url + item.id+'.png'"  alt="无法显示">
					</div>
					<!-- 描述 -->
					<div class="hero_des">
						<h3>{{item.title}}</h3>
						<p>{{item.cname}}（{{item.ename}}）</p>
					</div>
			</div>
		</div>

	</div>
		
</template>
		
<style lang="less">
.heros {
	width: 100%;
	overflow: hidden;
}
	.hero_map {
		width: 50%;
		overflow: hidden;
		display: inline-block;
		>div {
			padding: 32px 0;
			height: 116px;
			overflow: hidden;
			.hero_img {
				padding-left: 29px;
				padding-right: 14px;
				float: left;
				img {
					width: 116px;
					height: 116px;
					border-radius: 50%;
				}	
			}
			.hero_des {
				float: left;
				width: 55%;
				h3 {
					font-size: 29px;
					color: #000;
					margin-top: 22px;	
				}

				p {
					font-size: 27px;
					color: #000;
					font-weight: 200;
					margin-top: 12px;	
				    overflow: hidden;
				    display: -webkit-box;
				    word-wrap : break-word;
				    -webkit-line-clamp: 2;
				    -webkit-box-orient: vertical;
				    word-break: break-all;				    
				}
			}
		}	
	}
</style>
<script type="text/javascript">
import {mapActions} from "vuex"
// import {heroUrl} from "../filters"
const url ="http://cdn.tgp.qq.com/pallas/images/champions_id/";
	export default {
		created(){
				this.$parent.complated = true;	
				this.$parent.herosel = true;//选中
			this.$parent.videosel=this.$parent.playersel=this.$parent.newsel = false;
			this.setTitle('英雄');
			// this.setChampionList();
			setTimeout(getDate=>{
				console.log('开始请求数据');
				this.ajax.get('/api/champion')
				.then(res=>{
					var data = res.data.data;
					this.items = data;			
					console.log(data);
				},err=>{
					console.log(err);
				});
			},0);
		},
		computed:{
			// ...mapGetters(['championList'])
		},
		data(){
			return {	
				items:[],
				img_url:url	
			}
		},
		methods:{
			
			...mapActions(['setTitle']),
			goHeroDetails(item){
				this.$router.push({path:`/index/hero/herodetails/${item.id}`});
			}
			// ...mapActions(['setChampionList'])
		}
	}
</script>


