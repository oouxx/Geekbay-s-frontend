<template>
    <div >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/home" class="router_link">首页</router-link></el-menu-item>
        <el-submenu index="2" >
          <template slot="title" ><router-link to="/software/" class="router_link">软件</router-link></template>
          <router-link :to="'/software/'+ this.softwareType[0]" class="router_link"><el-menu-item index="2-0">Linux</el-menu-item></router-link>
          <router-link :to="'/software/'+ this.softwareType[1]" class="router_link"><el-menu-item index="2-1">Windows</el-menu-item></router-link>  
          <router-link :to="'/software/'+ this.softwareType[3]" class="router_link"><el-menu-item index="2-3">IOS</el-menu-item></router-link>  
          <router-link :to="'/software/'+ this.softwareType[2]" class="router_link"><el-menu-item index="2-2">Android</el-menu-item></router-link>  
          <router-link :to="'/software/'+ this.softwareType[4]" class="router_link"><el-menu-item index="2-4">MAC</el-menu-item></router-link>  
       </el-submenu>
       <el-submenu index="3">
          <template slot="title"><router-link to="/opensource/" class="router_link">开源</router-link></template>
          <router-link :to="'/opensource/'+ this.opensourceType[0]" class="router_link"><el-menu-item index="3-0">分类一</el-menu-item></router-link>
          <router-link :to="'/opensource/'+ this.opensourceType[1]" class="router_link"><el-menu-item index="3-1">分类二</el-menu-item></router-link>  
       </el-submenu>
       <el-submenu index="4">
          <template slot="title"><router-link to="/program/" class="router_link">编程</router-link></template>
          <router-link :to="'/program/'+ this.programType[0]" class="router_link"><el-menu-item index="4-1">C</el-menu-item></router-link>  
          <router-link :to="'/program/'+this.programType[1]" class="router_link"><el-menu-item index="4-2">C++</el-menu-item></router-link>  
          <router-link :to="'/program/'+this.programType[2]" class="router_link"><el-menu-item index="4-3">Java</el-menu-item></router-link>  
          <router-link :to="'/program/'+this.programType[3]" class="router_link"><el-menu-item index="4-4">Python</el-menu-item></router-link>  
          <router-link :to="'/program/'+this.programType[4]" class="router_link"><el-menu-item index="4-5">JavaScript</el-menu-item></router-link>  
          <router-link :to="'/program/'+this.programType[5]" class="router_link"><el-menu-item index="4-6">Go</el-menu-item></router-link>  

       </el-submenu>
        <el-menu-item index="5"> <router-link to="/experience/list" class="router_link">经验</router-link></el-menu-item>
        <el-menu-item index="6"> <router-link to="/question" class="router_link">问答</router-link></el-menu-item>
        <el-input class="search" v-model="keyword"></el-input>
        <i><a class="el-icon-search" :href="'https://cse.google.com/cse?cx=014827600618892460546:uxl60a7owdw&q='+this.keyword"></a></i>
        <router-link  to="/login" ><el-button round type="primary">登录</el-button></router-link>
        <div><image class="avatar"/></div>
      </el-menu>
    </div>
</template>

<script>

export default {
  name: 'Mheader',
  data () {
    return {
      activeIndex: '1',
      softwareType: ['Linux', 'Windows', 'Android', 'IOS', 'MAC'],
      programType: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Go', ''],
      opensourceType:['typeOne', 'typeTwo'],
      keyword: ''
    }
  },
  methods: {
    search:function(){
      Window.open()
    }
    }
}
</script>

<style scoped>
  .el-button {
    position: relative;
    float: right;
    top: 10px;

  }
  i{
    font-size: 35px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    /* text-align: center; */

  }
  a{
    color: black;
    text-decoration: none;
  }
  .search{
    display: inline-block;
    width: 200px;
    height: 8px;
  }
  .router_link{
    text-decoration: none;
    font-size:larger;
    font-weight: bold;
    color: black;
  }
  .el-menu-demo{
    text-align: center
  }

</style>
