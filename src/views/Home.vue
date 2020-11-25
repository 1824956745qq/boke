<template>
	<div  style=" width: 100%;height: 100%;">
		<!-- 手机 -->
	<div class="hidden-sm-and-up">
		<div class="shangtua">
			<div  style="padding-top: 13%;">
							
						 	<h1>木南</h1>
						 	<h3>时光如水,总是无言。</h3>
							<h3>若你安好,便是晴天。</h3>
						
							<el-row :gutter="5" type="flex" justify="center">
							  <el-col :span="5"><div >
						  <router-link :to="{name:'Xuexi'}">
							  <span>学习</span>
						 	</router-link></div></el-col>
							  <el-col :span="5"><div >	<router-link :to="{name:'Erji'}">
						 	<span>日记</span>
							</router-link></div></el-col>
			<el-col :span="5"><div >	<router-link :to="{name:'Liyyan'}">
							<span>留言</span>
							</router-link></div></el-col>
							<el-col :span="5"><div >	<router-link :to="{name:'About'}">
							<span>关于</span>
							</router-link></div></el-col>
							</el-row>
							</div>
		</div>
	</div>
		
		<!-- 电脑 -->
	<div  class="hidden-xs-only">
 <div class="shangtu">
 	<div  style="padding-top: 13%;">
 	<h1>木南</h1>
 	<h3>时光如水,总是无言。若你安好,便是晴天。</h3>
	
<div class="annui">
  <router-link :to="{name:'Xuexi'}">
	  <span>学习</span>
 	</router-link>
	<router-link :to="{name:'Erji'}">
 	<span>日记</span>
	</router-link>
	<router-link :to="{name:'Liyyan'}">
	<span>留言</span>
	</router-link>
	<router-link :to="{name:'About'}">
	<span>关于</span>
	</router-link>
	</div>
 	</div >
 
 </div>
 
 </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
	 data () {

  return {
	  mametext:null,
	        circleUrl: "https://www.xibeimn.cn/src/tupian/touxiang.jpg",
	      }
		
   },
   methods: {
   			 
			
   			  },
  components: {},
    created: function () { 
                  
                  },
};
</script>
<style scoped>
	/* 上 */
	.shangtua{
		width: 100%;
		
		height: 100vh;
		background-repeat:no-repeat;
	
background-size: 190% 100%;
				background-image: url(../assets/img/5facca1cd7c4e.jpg);
		}
	.shangtu{
		width: 100%;
		
		height: 100vh;
				
		background-repeat:no-repeat;
				 background-size: 100% 100%;
				background-image: url(../assets/img/5facca1cd7c4e.jpg);
		}
		.shangtu  h1{
	
		    text-shadow: 0 3px 6px rgba(0,0,0,.3);
			text-align: center;
			line-height: 3.5rem;
		    font-size: 3rem;
		   font-family: 'Playball',cursive;
		color: #FFFFFF;
		}
.shangtua h1{
	
		    text-shadow: 0 3px 6px rgba(0,0,0,.3);
			text-align: center;
			line-height: 3.5rem;
		    font-size: 3rem;
		   font-family: 'Playball',cursive;
		color: #FFFFFF;
		}
		
		.shangtu h3{
		font-size: 1.3rem;
	
		       color: rgba(255,255,255,.8);
		       text-shadow: 0 3px 6px rgba(0,0,0,.9);
		       font-weight: 400;
		    overflow: hidden;
			text-align: center;
			 letter-spacing: 0.2rem; 
			line-height: 4.175rem;
		       font-family: 'Long Cang',cursive;
			}
	.shangtua h3{
	font-size: 1.3rem;
	color: #FFFFFF;
	       color: rgba(255,255,255,.8);
	       text-shadow: 0 3px 6px rgba(0,0,0,.5);
	       font-weight: 400;
	    overflow: hidden;
		text-align: center;
		 letter-spacing: 0.2rem; 
		line-height: 4.175rem;
	       font-family: 'Long Cang',cursive;
		}
		.shangtu span{
			display: block;
						width: 6.85rem;
			  
			    opacity: 0.6;
			margin: 0.625rem 0.625rem;
			border-radius: 1.375rem;
						text-align: center;
						line-height: 2.55rem;
						color: #FFFFFF;
					  background-color:#989898;
				
					
					}
		.shangtua span{
			display: block;
			
    background-color:#989898 ;
    opacity: 0.6;

      border-radius: 1.375rem;
			text-align: center;
			line-height: 2.55rem;
			color: #FBFBFB;
		
			
			}
			.shangtua span:hover{
				
				 background-color:#ECECEC ;
				 color: #000000;
			}
			.shangtu span:hover{
				
				 background-color:#ECECEC ;
				 color: #000000;
			}
			.annui{
				padding-top: 4%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}
</style>
