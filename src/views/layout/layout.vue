<template>
  <div>
    <el-container>
      <el-header> <mheader></mheader> </el-header>
      <el-container>
        <el-aside width="250px"><tagbar ></tagbar> </el-aside>
        <el-container>
          <el-main> <appmain ></appmain></el-main>
          <el-footer> <mfooter ></mfooter></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import appmain from './components/appmain'
import mfooter from './components/mfooter'
import mheader from './components/mheader'
import tagbar from './components/tagbar'

export default {
  name: 'Layout',
  components: {
    appmain,
    mfooter,
    mheader,
    tagbar
  }
}
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /*text-align: center;*/
    /*line-height: 200px;*/
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    /*line-height: 260px;*/
  }
  .el-container:nth-child(7) .el-aside {
    /*line-height: 320px;*/
  }
</style>
