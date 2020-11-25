<template>
  <div class="baco">
	
    <div id="nav" v-show="$route.path!=='/'">
		<h2 class="shang">木南</h2>
		<div>
      <router-link to="/">首页</router-link>
	   <router-link to="/xuexi">学习</router-link>
      <router-link to="/erji">日记</router-link>
      <router-link to="/liyyan">留言</router-link>
      <router-link to="/about">关于</router-link>
	
	  
	  
	  </div>
    </div>
	
    <router-view></router-view>

 
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>


		
	.shang {
		 
		
			
		    font-size: 2rem;
		  font-family: 'Long Cang',cursive;
		 color: #505050;
		}
#nav {
	display: flex;
	align-items: center;

	margin: 0 1%;
	justify-content: space-between;
	height: 2.125rem;
	
  a {
    font-weight: bold;
    color: #2c3e50;
	font-family: 'Long Cang',cursive;
padding-left: 0.625rem;
	font-size: 1.1rem;

    &.router-link-exact-active {
      color: #6BC30D;
    }
  }
}

</style>
