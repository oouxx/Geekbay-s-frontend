<template>
  <div>
    <div id="editor"><router-link to="/experience/edit"><el-button type="primary">分享我的经验</el-button></router-link></div>
    <hr>
    <div>
      <el-col>
        <el-row v-for="(item,index) in list" :key="index+1">
          <el-card :body-style="{ padding: '0px' }">
            <div class="image-part">
              <img :src="item.icon" class="image">
            </div>
            <div style="padding: 14px;" class="summary-part">
              <h5><router-link :to="'/experience/details/' + item.id">{{ item.title }}</router-link></h5>
            </div>
              <span type="text" class="last_time">{{ item.modify_time }}</span>
          </el-card>
        </el-row>
      </el-col>
    </div>
  </div>
</template>
<script>
import { Experience } from '../../api/api'
export default {
  name: 'Index',
  data: function(){
    return{
      list: null
    }
  },
  created() {
    this.Exper()
  },
  methods: {
    Exper: function(){
      Experience().then(response => {
       this.list = response.data
    })
  }
 }
}
</script>
<style scoped>
  #editor{
    float: right;
    position: fix;
  }
  .image-part{
    float: left;
  }
  .summary-part{
    float: left;
  }
  .image {
    width:150px;
    height:150px;
    /* display: block; */
  }
  .last_time {
    padding: 0;
    float: right;
  }
</style>

