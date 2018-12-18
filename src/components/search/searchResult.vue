<template>
  <div>
    <el-col>
    <el-row v-for="(item,index) in result" :key="index+1">
      <el-card :body-style="{ padding: '0px' }">
        <div class="image-part">
          <img :src="item.detail.icon" class="image">
        </div>
        <div style="padding: 14px;" class="summary-part">
          <h5><router-link :to="item.url">{{ item.title }}</router-link></h5>
        </div>
          <span type="text" class="last_time">{{ item.modify_time }}</span>
      </el-card>
    </el-row>
  </el-col>
  </div>
</template>
<script>

export default {
  name: 'searchResult',
  data: function(){
    return{
      result: ''
    }
  }
  // created: function(){
  //     search(this.$route.params.keyword).then( response => {
  //       this.result = response.data
  //     })
  //   }
}
</script>
<style>
</style>