<template>
	<div class="beijingtupian">
  <div class="topa">
	  	<div  class="biaoone">
  <el-card shadow="always">
    <div class="biaoa">
		
		<h1 style="text-align: center;">{{text[0].biaoti}}</h1>
		<h2 class="ptext">编辑时间：{{text[0].shijian}}</h2>
		<h2 class="ptext">作者：佚名</h2>
		<el-divider></el-divider>
		
	<div v-html="text[0].neirong">
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
 data () {
 return {
 	text:[{biaoti:""},
	
	],
 	      }
 		
  },
  methods: {
  			   show() {
  				   const couponId = this.$route.query.couponId
				   
  				  console.log(couponId);
  			      this.$http({
  			        method: 'post',
  			        url: 'https://www.xibeimn.cn:2001/xiangqin',
  			        data: {
  			          id:couponId,
  			        }
  			     })
  				 .then((response) => {
  				 	
  						this.text=response.data
						
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
<style>
.topa{


		padding: 3%;
margin: 0 auto;
	}
	.beijingtupian{
		width: 100%;
	
		height: 100%;
		
background-repeat:no-repeat;
	
		 background-size: 190% 100%;
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
			text-indent: 2em;
			font-size: 15px;
			
		}
		.biaoa b{
			font-weight: bold;
			
		}
		.biaoa img{
		width: 60%;
		margin-left: 3%;
		text-align: center;
		}
		.biaoa a{
			color:#0366d6;
		}
	.ptext{
		    font-size: 1rem;
			padding-bottom: 20rpx;
			margin-top: 30px;
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
		    font-size: 14px;
			background-color: #FFFFFF;
		}
</style>
