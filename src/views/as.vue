<template>

	<div class="wraper">
 
	<div class="shangtu">
		<div style="margin-top: 15%;">
		<h1>木南</h1>
		<h3>I send my miss to the scattering stars and wish you a </h3>
		<h3>sweet dream under the light shedding through your window。</h3>
		<h3>我想将对你的思念寄予散落的星星，但愿那点点的星光能照进你的窗前。</h3>
		
		
		</div >
	<a @click="showDetails()"><i class="el-icon-arrow-down"></i></a>
	</div>
	
	<div class="beijingtupian">
  <div class="quanju">
    <div class="timeline-line"></div>
	
	<div class="neirong ">
	<div class="neironga">
		<div class="atxt"><h4>2020.11.11</h4></div>
		<div  class="btxt" ><p></p></div>
		<div class="dtxa"></div>
		<div class="ctxt"><P>{{text}}</P>
		<img src="../assets/img/5fb759b43cc6e.jpg" />
		</div>
	</div>
	<div class="neirongb">
		<div class="ctxt" >夏天，我在你的风里，借了一缕栀子花的清香，拈着芙蓉的娇媚，住在亭亭的荷叶隔壁，用丝丝的绿萍问候，你蜿蜒在翰墨素笺上，
		瘦成我朴素的诗句，合着时间的节拍，敲打着生命的鼓点。</div>
	    <div class="dtxt"></div>
			<div  class="btxt" ><p></p></div>
				<div class="atxt"><h4>2020.11.11</h4></div>
	</div>
	<div class="neironga">
		<div class="atxt"><h4>2020.11.11</h4></div>
		<div  class="btxt" ><p></p></div>
		<div class="dtxa"></div>
		<div class="ctxt"><P>四季很美，唯喜秋的颜色。当初秋的脚步翩跹而来，秋的韵味便也随心而至，总感觉秋中富有浓浓的诗意，醉而欲痴，那一片将红的枫叶，一缕浓郁的秋风，一株含香的薰衣草，清凉碧蓝的天空，沾于草尖的凝露，无不让人陶醉。

</P>
		</div>
	</div>
	<div class="neirongb">
		<div class="ctxt"  id="a1" ><img src="../assets/img/5fb759b72e5fa.jpg">这个夏天，毕业季，人生另一个路口，一次远行。也许有些心情适合保存，有些悸动适合回想。有些朋友适合感恩，淌过岁月的小河，路有尽头，“道”无止境。从天真无邪的童年到懵懂迷茫的青少年再到稍微成熟的青年，总在马不停蹄的踏着自己的脚步，或深或浅，或大或小，串连成一路成长的见证，而爱一直流淌在心中。</div>
	    <div class="dtxt"></div>
			<div  class="btxt" ><p></p></div>
				<div class="atxt"><h4>2020.11.11</h4></div>
	</div>
	<div class="neironga">
		<div class="atxt"><h4>2020.11.11</h4></div>
		<div  class="btxt" ><p></p></div>
		<div class="dtxa"></div>
		<div class="ctxt" ><P>秋天，美丽的季节，收获的季节，金黄的季节，同百花盛开的春天一样另人向往，同骄阳似火的夏天一样热情，同白雪飘飘的冬天一样迷人。</P>
		</div>
	</div>
	<div class="neirongb">
		<div class="ctxt">没人在乎你怎样在深夜痛哭，也没人在乎你辗转反侧的要熬几个秋。外人只看结果，自己要独撑过程。等我们都明白了这个道理，便不会再在人前矫情，四处诉说以求宽慰。</div>
	    <div class="dtxt"></div>
			<div  class="btxt" ><p></p></div>
				<div class="atxt"><h4>2020.11.11</h4></div>
	</div>
	</div>
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
  data () {
  	      return {
  			  	liuyantext:null,
  			           text:"蟋蟀们在草丛里诉说着爱情的疼痛星星们在向往牛郎织女的爱情有谁在意季节的变更落叶亲吻着穿梭在街,道的风路灯拉长了那段只身孤影有谁在意离别时的表情向日葵依然留恋着阳光的眼神含羞草的伤依旧不能触碰有谁在意季节的面容硕果累累的枝头散发着喜悦的温柔草丛的晨露上折射着思乡的忧愁九月，我梦见夏天结束的样子看庭前花开花落望天空云卷云舒",
  					
  			       
  	        circleUrl: "https://www.xibeimn.cn/src/tupian/touxiang.jpg",
  	      }
		 },
  methods:{
	  showDetails(){
	  			var a1=document.getElementById("a1")
	  this.$nextTick(function () {
	                window.scrollTo({"behavior":"smooth","top":a1.offsetTop});
	            })
	       }
  },
  beforeCreate () {
  
    document.querySelector('body').setAttribute('style', 'height:100%')
  
  },
  beforeDestroy () {
  
    document.querySelector('body').removeAttribute('style')
  
  }
};
</script>

<style scoped>
.beijingtupian{
		width: 100%;
		height: 100%;
		
background-repeat:no-repeat;
		 background-size: 100% 100%;
		background-image: url(../assets/img/5fb759b4ea887.jpg);
		scroll-behavior:smooth;
		}
.quanju{
	width: 76.625rem;
	height: 100%;
	margin: 1.625rem auto;
background-color: #FFFFFF;
position: relative;
}
.shangtu{
	width: 100%;
	position: relative;
			height:100vh;
		
			    
			
	background-repeat:no-repeat;
			 background-size: 100% 100%;
			background-image: url(../assets/img/home-bg-01.jpg);
	}
	.shangtu i{
		display: block;
		bottom:2.5rem ;
		width: 3.25rem;
		height: 3.125rem;
		font-weight: bold;
		font-size: 3.575rem;
		color: #FFFFFF;
		position: absolute;
		left: 48%;
		bottom:3.5rem ;
		-webkit-animation:gogogo 2s  infinite linear ;
	}
	.shangtu i:hover{
		animation-play-state:paused;
		}
	@-webkit-keyframes gogogo {
	    
	        	0%   {bottom:3.5rem ;}
	        	25%  {bottom:4rem ;}
	        	50%  {bottom:3.5rem;}
				75%  {bottom:4rem ;}
	        	100% {bottom:3.5rem;}
	      
	
	          
	}
	.shangtu h1{
		    text-shadow: 0 3px 6px rgba(0,0,0,.3);
			text-align: center;
			line-height: 3.5rem;
		    font-size: 3rem;
		   font-family: 'Playball',cursive;
		color: #FFFFFF;
		}
	.shangtu h3{
	font-size: 1.3rem;
	color: #FFFFFF;
	       color: rgba(255,255,255,.8);
	       text-shadow: 0 3px 6px rgba(0,0,0,.5);
	       font-weight: 400;
	    overflow: hidden;
		text-align: center;
		 letter-spacing: 0.4rem; 
		line-height: 2.175rem;
	       font-family: 'Long Cang',cursive;
		}
.timeline-line {
    position: absolute;
    left: 50%;
    
    height: 100%;
    width: 2px;
    background: #484348;
   
}

.dateview {
  
    
    top: 20px;
    width: 125px;
    line-height: 30px;
   
    border-radius: 0px 40px;
    text-align: center;
    color: #fff;
}
.neirong{
		  z-index: 100;
		  display: flex;
		  height: 100%;
		  flex-direction: column;
	padding-top: 3.25rem;
	width: 76.625rem;
	}
	.neironga{
		margin-top: 50px;
		margin-left: 31.95rem;
	padding-bottom: 20px;
		width: 43rem;
		
		}
		.neirongb{
			
		
		margin-top: 50px;
			margin-left: 2.2rem;
		padding-bottom: 20px;
		
			width: 43rem;
			
			}
		.atxt{
			float: left;
			color: #6bc30d;
			line-height: 40px;
		
		}
		.btxt{
			float: left;
			width: 20px;
			padding: 10px 0;
			background-color: #FFFFFF;
			height: 1.25rem;
			
		margin: 0 10px;
		}
		.btxt p{
			width: 20px;
			 
			height: 1.25rem;
			background-size: 1.25rem 1.25rem;
			background-color: #FFFFFF;
			background-image: url(../assets/img/dot-circle.png);
			}
		.ctxt{
			float: left;
			padding: 20px;
			height: 100%;
		line-height: 1.525rem;
			width: 31.25rem;
			z-index: 1;
			background: #484348;
			color: #fff;
		}
		.ctxt img{
			display: block;
			margin-top: 0.3125rem;
			margin-bottom:0.3125rem;
			width: 30rem;
		}
		.dtxa{
				float: left;
		border: 10px solid rgba(255,255,255,0);
		    border-top: 6px solid rgba(255,255,255,0);
		    border-bottom: 6px solid rgba(255,255,255,0);
		    border-right-color: #484348;
			 margin-top:14px;
				}
		.dtxt{
			float: left;
	border: 10px solid rgba(255,255,255,0);
	    border-top: 6px solid rgba(255,255,255,0);
	    border-bottom: 6px solid rgba(255,255,255,0);
	    border-left-color: #484348;
		 margin-top:14px;
			}
			 
			.dibu{
				width: 100%;
				color: gray;
			text-align: center;
			   border-bottom: 1px dashed #ececec;
			  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
			    font-size: 14px;
				background-color: #FFFFFF;
			}
			.topan{
				height: 100%;
				width: 100%;
				background-color: #999aaa;
				                      
				text-align: center;
				line-height: 35px;
			}
			.wraper{
				display: flex;
				flex-direction: column; 
				width: 100%;
				height: 100%;
			
			}
		
</style>