<template>

	<div>
		<!-- 引导页面 -->
		<div class="guide">
			<span class="logo"></span>
			<span class="vue"></span>
			<!-- 跳转页面 -->
			<router-link to="./index/news" id="go">进入</router-link>		
		</div>
		
	</div>
</template>
<style lang="less">
		/*引导页面div*/
		.guide{
			width:750px;
			height: 1334px;
			background-image: url('../img/private/background.jpg');
			background-size: cover;
			position: relative;
			/*logo的div*/
			span {
				background-size: cover;
				position: absolute;
				display: block;
			}
			.logo {
			width: 488px;
			height: 299px;
			background-image: url('../img/private/logo.png');
			bottom: 397px;	
			left: 130px;	
			}
			/*vue-助手div*/
			.vue {
				width: 513px;
				height: 60px;
				background-image: url('../img/commonality/top/text.png');		
				bottom: 286px;				
				left: 119px;
			}	
		}
		
		
		
		/*跳转按钮div*/
		#go{
			position: absolute;
			bottom: 133px;
			width:219px;
			height: 67px;
			background:#40a6fb;
			text-align: center;
			line-height: 67px;
			left:266px;
			font-size:33px;
			color:#ffffff;
			border-radius: 5px;
			text-decoration: none;
		}	
</style>