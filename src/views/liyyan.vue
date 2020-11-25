<template>
	<div>
		<div class="beijingtupian">
	<!-- 手机 -->
	<div class="hidden-lg-and-up">
		
			<div class="topa" >
		
				<el-card shadow="always" style="height:14.925rem;" :body-style="{ padding: '5px' }" >
					留言板
				<div style="height: 1px;width: 100%;margin: 8px 0;background-color: #DCDFE6;"></div>
					
					 
					   	<el-form ref="form"  :model="form" >
			  <el-form-item prop="text" :rules="[
		      { required: true, message: '内容不能为空'}
		    ]">
			    <el-input type="textarea" placeholder="既然来了就评论一下呗" v-model="form.text" rows="3"  resize="none"></el-input>
			  </el-form-item>
			  
			  <el-row :gutter="0"  type="flex" justify="space-between" >
			  <el-col :span="3"><div  >
			  		<p  style="font-size: 0.625rem;line-height: 1.8rem;">头像：</p>
					 </div>
						</el-col>
						  <el-col :span="22"><div  >
			  	<div>
			  			<div  v-for="(sita,index) in touimg" :key ="index"   @click="xuanzhong(sita.img,index)" style=" float: left;margin-left: 0.195rem;" >
			  				<el-avatar  v-bind:style="sita.abse" :size="30" :src="sita.img"></el-avatar></div>
			  		<p v-show="touid" style="font-size:12px;float: left; color: #F56C6C;">请选择一个头像</p>
			  </div>
			  </div>
			  	</el-col>
			  					 </el-row>
			  <el-row :gutter="0" type="flex" justify="space-between">
				  
			    <el-col :span="3"><div style="display: flex;align-items: center;" >
			<p style="font-size: 0.625rem;line-height: 2.4rem;">昵称：</p>
			</div>
			</el-col>
		  <el-col :span="9"><div style="display: flex;align-items: center;" >
				   <el-form-item prop="name" :rules="[
				     { required: true, message: '内容不能为空'}
				   ]">
				      <el-input   size="mini" v-model="form.name"></el-input>
				    </el-form-item>
					</div>
					</el-col>
				
				  <el-col :span="13"><div style="float: right;">
				<el-form-item>
					  <el-button size="mini" @click="resetForm">取消</el-button>
					  <el-button  size="mini" type="primary" @click="onSubmit">留言</el-button>
				 </el-form-item>
				 </div>
				 </el-col>
				  </el-row>
				
			</el-form>
				  </el-card>
		</div>
	</div>
		<!-- 电脑 -->
	
		<div  class="hidden-md-and-down">
		
		
			<div class="topa" >
		
				<el-card shadow="always" style="height: 330px;" >
					留言板
				
					   <el-divider></el-divider>
					 
					   	<el-form ref="form"  :model="form" >
			  <el-form-item prop="text" :rules="[
		      { required: true, message: '内容不能为空'}
		    ]">
			    <el-input type="textarea" placeholder="既然来了就评论一下呗" v-model="form.text" rows="6"  resize="none"></el-input>
			  </el-form-item>
			  
			  
			  <el-row :gutter="2" type="flex" justify="space-between">
			    <el-col :span="10"><div style="display: flex;align-items: center;" >
			<p style="margin-bottom: 1.375rem;">昵称：</p>
		
				   <el-form-item prop="name" :rules="[
				     { required: true, message: '内容不能为空'}
				   ]">
				      <el-input  v-model="form.name"></el-input>
				    </el-form-item>
					</div>
					</el-col>
					<el-col :span="20"><div  style="display: flex;align-items: center;">
					<p >头像：</p>
					
				<div style="display: flex;align-items: center;" >
						<div  v-for="(sita,index) in touimg" :key ="index"   @click="xuanzhong(sita.img,index)" style="margin-left: 0.625rem;" >
							<el-avatar  v-bind:style="sita.abse" :size="45" :src="sita.img"></el-avatar></div>
					<p v-show="touid" style="margin-left: 1.25rem; font-size:12px;color: #F56C6C;">请选择一个头像</p>
				</div>
			</div>
				</el-col>
				  <el-col :span="7"><div style="float: right;">
				<el-form-item>
					  <el-button @click="resetForm">取消</el-button>
					  <el-button   @click="onSubmit">留言</el-button>
				 </el-form-item>
				 </div>
				 </el-col>
				  </el-row>
			</el-form>
				  </el-card>
		</div>
		</div>
		
		  <div v-for="(sites) in liuyantext.slice(shushang,shuxia)" :key ="sites.id"   style="margin:0.625rem 6% 0 6%;">
 
	<el-card shadow="always" >
		
	 <div class="xoan">
		 <el-avatar  :size="40" :src="sites.img"></el-avatar>
	 <div style="margin-left: 0.625rem;">
	 <p style="font-size: 0.875rem;color: #1890ff;">{{sites.name}}</p>
	 <a style="font-size: 0.8125rem;color: #969696;"> {{sites.shijian}}</a>
	 </div>
	
	 </div>
	<p class="xoantext">{{sites.text}}</p>
	  </el-card>
	  
	 </div>
	 <div style="margin: 2% 0 2% 6%;">
	<el-pagination
	     
	        @current-change="handleCurrentChange"
	        :current-page="currentPage"
	        :page-size="pagesize"    
			  background
			    layout="prev, pager, next"
	               :total="liuyantext.length">   
	</el-pagination>
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
			  currentPage:1, //初始页
			             pagesize:9,    //    每页的数据
			  						  shushang:0,//每页第一个数组下标
			  						  shuxia:9,// 每页最后一个数组下标
			img:"",
			as:"9",
			touid:false,
			  	liuyantext:[{img:"https://www.xibeimn.cn/src/tupian/touxiang.jpg",
				text:"从未离开，从未来过。你只是过客,我只是路过,我们只是擦肩而过。",
				shijian:"2020.11.21 10:22.55",
				name:"木南",
				id:"1"
					}
				],
				touimg:[{img:"https://www.xibeimn.cn/src/bokeimg/tou1.png",abse:{filter: 'contrast(20%)'}},
				{img:"https://www.xibeimn.cn/src/bokeimg/tou2.png" ,abse: {filter: 'contrast(20%)'}},
				{img:"https://www.xibeimn.cn/src/bokeimg/tou3.png" ,abse: {filter: 'contrast(20%)'}},
				{img:"https://www.xibeimn.cn/src/bokeimg/tou4.png" ,abse: {filter: 'contrast(20%)'}},
				{img:"https://www.xibeimn.cn/src/bokeimg/tou5.png" ,abse: {filter: 'contrast(20%)'}},
				{img:"https://www.xibeimn.cn/src/bokeimg/tou6.png" ,abse: {filter: 'contrast(20%)'}},
				{img:"https://www.xibeimn.cn/src/bokeimg/tou7.png" ,abse: {filter: 'contrast(20%)'}},
				{img:"https://www.xibeimn.cn/src/bokeimg/tou8.png" ,abse: {filter: 'contrast(20%)'}},
				],
				
			   form: {text: '',name:"",},
	        circleUrl: "https://www.xibeimn.cn/src/tupian/touxiang.jpg",
	      }
   },
   methods:{
	   
	   //分页
	   handleCurrentChange: function(currentPage){
	   					 this.shuxia=this.pagesize
	           this.currentPage = currentPage;
	   						 this.shuxia=this.shuxia*currentPage
	   						 this.shushang= this.shuxia-this.pagesize
	   						   console.log( this.shuxia)
	   						      console.log( this.shushang)
	         
	   },
	   //逆序输出
	    reverseSum() {
	            this.liuyantext=this.liuyantext.reverse();
	          },
//时间格式
	getTime(){
	      var date1=new Date();
	      var year=date1.getFullYear();
	      var month=date1.getMonth()+1;
	      var day=date1.getDate();
	      var hours=date1.getHours();
	      var minutes=date1.getMinutes();
	      var seconds=date1.getSeconds();
					if (month >= 1 && month <= 9) {
					    month = "0" + month;
					  }
					  if (day >= 0 && day <= 9) {
					    day = "0" + day;
					  }
					  if (hours >= 0 && hours <= 9) {
					    hours = "0" + hours;
					  }
					  if (minutes >= 0 && minutes <= 9) {
					    minutes = "0" + minutes;
					  }
					  if (seconds >= 0 && seconds <= 9) {
					    seconds = "0" + seconds;
					  }
	      return year+"."+month+"."+day+"  "+hours+":"+minutes+":"+seconds
	    },
	   xuanzhong(img,e){
		    this.touid=false
		 let a=this.as
		 if (a==9) {
		 	console.log(".")
		 }else{
		this.touimg[this.as].abse={filter: 'contrast(20%)'}
			 }
 this.touimg[e].abse={filter: 'contrast(100%)'},
		   this.img=img,
		     this.as=e
  console.log(this.img);
		   },
	      resetForm() {
			   this.$refs["form"].resetFields(); 
			  },
			  
			  
			  
	     onSubmit() {
			 if( this.img==""){
				 this.touid=true
				 console.log("无图片")
			 }else{
		this.$refs["form"].validate((valid) => {
		  if (valid) {
    this.$http({
   			        method: 'post',
   			       	url:"https://www.xibeimn.cn:2001/liuyan",
   			        data: {
						name:this.form.name,
						img:this.img,
						shijian:this.getTime(),
   			          text: this.form.text,  
   			        },   
   			     })
				.then((response) => {
					 this.$refs["form"].resetFields(); 
					   this.liuzhan()
			   console.log(response);
				 	  })
				 	  .catch((error) =>{
				 	    console.log(error);
				 	  });
					    } else {
					      console.log('error submit!!');
					      return false;
					    }
					  });
					  }
	         },
			 
			 
			 
			 
			liuzhan() {
			    this.$http({
			      method: 'post',
			      url: 'https://www.xibeimn.cn:2001/zhanshi',
			      data: {
			        name: 'virus'
			      }
			   })
			.then((response) => {
							 	  //  console.log(response.data);
									this.liuyantext=response.data
									this.reverseSum()
							 	  })
							 	  .catch((error) =>{
							 	    console.log(error);
							 	  });
			}   
	   },
	   created: function () {
	                     //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
	                     //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
	                     console.log("建立");
	   				  this.liuzhan()
	                 },
   
};
</script>
<style scoped>

	.topa button{
	
		    color: #2bbc8a;
		  
		    border: 1px solid #2bbc8a;
		    border-radius: 40px;
	
		 
		    background-color: #fff;
		    outline: none;
	}
	.beijingtupian{
			width: 100%;
			height: 100%;
	background-repeat:no-repeat;
			
			
			 background-size: 190% 100%;
			background-image: url(../assets/img/5fb759b4ea887.jpg);
			}
.topa{

	height: 100%;
margin: 0 3%;

	}
	.xoan{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 0.625rem;
	}
	.xoantext{
		
		line-height: 1.75rem;
		
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