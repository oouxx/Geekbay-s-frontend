<template >
  <el-col>
    <el-row v-for="(item,index) in list" :key="index+1">
      <el-card :body-style="{ padding: '0px' }">
        <div class="image-part">
          <img :src="item.detail.icon" class="image">
        </div>
        <div style="padding: 14px;" class="summary-part">
          <h5><router-link :to="'/software/details/'+ item.id ">{{ item.title }}</router-link></h5>
        </div>
          <span type="text" class="last_time">{{ item.modify_time }}</span>
      </el-card>
    </el-row>
  </el-col>
  <!--<div>-->
    <!--<pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />-->
  <!--</div>-->
</template>

<script>
import { fetchSoftwareList } from '../../api/api'
export default {
  name: 'Software',
  data: function(){
    return {
      title: 'title',
      list: null,
      softwareType: 'All'
    }
  },
  watch: {
     $route(){
        this.softwareType = this.$route.params.type
      },
      softwareType(){
        this.fetchSoftware()
      }
  },
  created() {
    this.fetchSoftware()
  },
  methods: {
    fetchSoftware: function(){
      fetchSoftwareList({
        params: {
        type: this.softwareType
      }}).then(response => {
          this.list = response.data
        })
  }}

}
</script>

<style scoped>
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
