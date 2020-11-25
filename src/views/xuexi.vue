<template>
	<div >
 <div class="centerbg">

	<div class="focusinfo">
		<div><router-link :to="{name:'Home'}"><el-avatar class="touxiangcss" :size="80" :src="circleUrl"></el-avatar></router-link></div>
		<div class="header-info"><p >吾不南</p></div>
	</div>
 </div>
 <div class="site-content">
 <div class="notice">
	  你要悄悄拔尖, 然后惊艳所有人 ! 
 </div>
 <div class="top-feature">
	 <p class="fes-title">文章</p>
 </div>
 <!-- //// -->
 <!-- 手机 -->
 <div class="hidden-sm-and-up">
	<div v-for="(site) in mametext" :key ="site.id" class="liebiao"  style="padding: 0.6rem 0;">
		 <router-link :to="{name:'Cs',query:{ couponId:site.wenzhangid}}">
			 <div style="display: flex;flex-direction: row;">
		
	<div >
	<div class="liebiaohang">
		 <h1 class="entry-titla">{{site.biaoti}}</h1>
		 <p class="liebiaorq">作者:佚名</p>
		 	 </div>
		 <div class="liebiaorq"><p>{{site.shijian}}</p></div>
		
		<p class="pliebiae">{{site.neironga}}</p>
		 </div>	
	
	</div>
		</router-link>
	
	</div> 
 </div>
 <!-- 电脑 -->
 <div class="hidden-xs-only">
 <div v-for="(site) in mametext" :key ="site.id" class="liebiao" >
	 <router-link :to="{name:'Cs',query:{ couponId:site.wenzhangid}}">
		 <div style="display: flex;flex-direction: row;">
	<div><el-avatar shape="square" :size="180" :src="site.img"></el-avatar></div>
<div style="padding-left: 0.9125rem;">
	<div class="liebiaohang">
	 <h1 class="entry-title">{{site.biaoti}}</h1>
	 <div class="liebiaorq" style=""><p>{{site.shijian}}</p></div>
	 </div>
	<p class="pliebiao">{{site.neironga}}</p>
	 </div>	

</div>
	</router-link>

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
	  mametext:null,
	        circleUrl: "https://www.xibeimn.cn/src/tupian/touxiang.jpg",
	      }
		
   },
   methods: {
   			   show() {
				   
				
   			      this.$http({
   			        method: 'post',
   			        url: 'https://www.xibeimn.cn:2001/wengzhang',
   			        data: {
   			          name: 'virus'
   			        }
   			     })
				 .then((response) => {
				 	    console.log(response.data);
						this.mametext=response.data
				 	  })
				 	  .catch((error) =>{
				 	    console.log(error);
				 	  });
   			  }  
			
   			  },
  components: {},
    created: function () { 
                      //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
                      //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
                      console.log("建立");
					  this.show()
                  },
};
</script>
<style scoped>
	/* 上 */
.centerbg{
	    width: 100%;
	 background-image: url(../assets/img/1.jpg);
	    height: 650px;
	    background-position: center center;
	    background-repeat: no-repeat;
	    background-attachment: fixed; 
	    background-size: cover;
		position: relative;
	}
	.touxiangcss{
		   transition:transform 1s;
		       cursor: pointer;
		}
		.touxiangcss:hover{
			transform: rotate(360deg);
			}
	
	.focusinfo {
	    position: relative;
	    max-width: 900px;
	    padding: 0 10px;
	    top: 30%;
	   /* left: 0%; */
	   margin: 0 auto;
	    
	    text-align: center;
	}
	.header-info {
	
	    width: 40%;
	    margin: auto;
	    font-size: 20px;
	    color: #fff;
		font-weight: bold;
	    padding: 20px 30px;
	    margin-top: 30px;
	    letter-spacing: 1px;
	    line-height: 30px;
	    background: rgba(0,0,0,.3);
	}
	/* z中 */
	.site-content {
		width: 80%;
	  margin: 0 auto;
	    padding: 0 10px;
		height: 100%;
		flex-direction: column;
	 
	}
	.notice {
	    padding: 20px;
	
	    color: #505050;
	    margin-top: 60px;
		width: 97%;
	    margin-bottom: 60px;
	    background: #fbfbfb;
	    border-radius: 3px;
	}
	.top-feature {
	    width: 100%;
	    height: auto;
	    margin-top: 30px;
	   
	}
	.fes-title{
	    color: #757575;
	    font-size: 16px;
		
	    font-weight: 400;
	    padding-bottom: 15px;
	    border-bottom: 1px dashed #ececec;
		}
		.liebiao{
			
		
	padding: 0.625rem;
		
	    border-bottom: 1px dashed #ececec;
		}
		 h1.entry-title {
		    font-size: 1.25rem;
		    font-weight: 400;
		    line-height: 50px;
		  
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		width: 70%;
		}
		h1.entry-titla {
		    font-size: 0.9375rem;
		    font-weight: 200;
		    line-height: 1.25rem;
		  
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		width: 80%;
		}
		.liebiaorq{
			line-height: 1.25rem;
			font-size: 0.75rem;
			    color: #989898;
				
		}
		.liebiaohang{
			display: flex;
			flex-direction: row;
			width:100% ;
			align-items: center;
			justify-content: space-between;
		}
		.pliebiae{
			    min-height: 60px;
			   overflow :   hidden ;
			    text-overflow :   ellipsis ; 
			   display :   -webkit-box ;
			    -webkit-line-clamp :   4 ; 
			   -webkit-box-orient :   vertical ;
			   			
			   overflow: hidden;
			   text-overflow: ellipsis;				
			   	webkit-line-clamp:4; 
			  height: 7rem;
			    font-size: 0.625rem;
			   
			    color: #6f6f6f;
			    letter-spacing: 1px;
			    line-height: 30px;
		}
	.pliebiao{
		    min-height: 60px;
		   overflow :   hidden ;
		    text-overflow :   ellipsis ; 
		   display :   -webkit-box ;
		    -webkit-line-clamp :   4 ; 
		   -webkit-box-orient :   vertical ;
		   			
		   overflow: hidden;
		   text-overflow: ellipsis;				
		   	webkit-line-clamp:4; 
		  height: 7rem;
		    font-size: 15px;
		   
		    color: #6f6f6f;
		    letter-spacing: 1px;
		    line-height: 30px;
	}
	
	.dibu{
			width: 100%;
			color: gray;
		text-align: center;
		   border-top: 1px dashed #ececec;
		  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
		    font-size: 14px;
			background-color: #FFFFFF;
		}
</style>