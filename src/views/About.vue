<template>
	<div class="beijingtupian">
  <div class="topa">
	  	<div  class="biaoone">
  <el-card shadow="always">
    <div class="biaoa">
		<h2 class="ptext">前言</h2>
		<el-divider></el-divider>
		<div>
			<p>无论岁月摆出怎样的姿势，或许我们都应该有一些坚持，有一些不变。也只有这样，才能相信你还在这里，从不曾离去。</p>
		<p > 我是一名刚刚步入社会的学生，同时也是一名热爱前端开发的 "程序员"，首先非常欢迎你来访问我的个人博客。</p>
<p>这是我的个人博客，当前博客并不完善在审美设计、程序设计或者其他方面肯定会有许多的缺陷和不足。</p>
		</div>
	</div>
	<div class="biaoa">
			<h2 class="ptext">关于我</h2>
			<el-divider></el-divider>
			<div>
			<p>名称：木南</p>
			<p>专业：软件技术</p>
			<p>现居：中国·江西·赣州</p>
			<p>工作单位：没得~</p>
			
			</div>
		</div>
    <div class="biaoa">
    		<h2 class="ptext">联系我</h2>
    		<el-divider></el-divider>
    		<div>
    		<p>QQ:1824956745</p>
    		<p>微信:2696398968</p>
    		<p>邮箱:<a href="mailto:1824956745@qq.com">1824956745@qq.com</a></p>
    		<p>GitHub:<a href="https://github.com/1824956745qq">https://github.com/1824956745qq</a></p>
    		</div>
    	</div>
	  <div class="biaoa">
			<h2 class="ptext">关于博客</h2>
			<el-divider></el-divider>
			<div>
				<p><b style="font-weight: bold;">博客网址</b>：www.xibeimn.cn</p>
				<p><b style="font-weight: bold;">静态页面</b>：使用VUE+ElementUI开发，优化界面内容显示</p>
				<p><b style="font-weight: bold;">后台系统</b>：使用nodejs轻量级Web框架Express完成数据读取和储存</p>
			
			
			</div>
		</div>
	  </el-card>
	  </div>
	 
	
   </div>
   <div class="dibu">
	     <p style="line-height:30px;">相离莫相忘  且行且珍惜</p>
	   <p style="line-height:20px;">木南个人博客 欢迎你的到来</p>
    
   </div>
</div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.topa{
	
	padding: 3%;
	min-height: 53rem;
margin: 0 auto;
	}
	.beijingtupian{
		width: 100%;
	
		height: 100%;
		
background-repeat:no-repeat;
	
		 background-size: 100% 100%;
		background-image: url(../assets/img/5fb759b4ea887.jpg);
		}
	.biaoa{
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		}
		.biaoone{
			margin-bottom: 1.25rem;
		}
		.biaoa p{
			line-height: 2.125rem;
			color: #636975;
			
			font-size: 15px;
			
		}
		.biaoa img{
			width: 8.5rem;
		}
		.biaoa a{
			color:#0366d6;
		}
	.ptext{
		    font-size: 1rem;
			padding-bottom: 20rpx;
			margin-top: 10px;
		padding-left: 0.625rem;
		font-weight: 700;
		border-left: 0.25rem solid #6bc30d;
		}
		.dibu{
			width: 100%;
			color: gray;
		text-align: center;
		   border-bottom: 1px dashed #ececec;
		  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
		    font-size: 0.875rem;
			background-color: #FFFFFF;
		}
</style>
