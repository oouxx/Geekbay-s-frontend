<template>
  <div>
    <editor v-model="detail"/>
    <!-- <vue-disqus shortname="oouxx" title="这是软件详情页的评论" :identifier="this.id" :url="'http://127.0.0.1/software/details/'+ this.id">disqus</vue-disqus> -->
    <vue-git-comment :options="options" />
  </div>
</template>
  </div>
</template>

<script>
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue' 
import { fetchSoftware } from '../../api/api'
export default {
  name: 'Detail',
  data (){
    return {
      id: this.$route.params.id,
      detail: "",
      options: {
        client_id: 'fd7de97f2d63085c8b53',
        client_secret: '398dc5eaaa0fa685cc54c759fd52f8b6f2636d84',
        owner: 'oouxx',
        repo: 'git-comment',
        uuid: 'software_detail_'+this.$route.params.id
      }
    }
  },
  components: {
    'editor': Viewer
  },
  props:{
    height:{ 
      type:String,
      default: '400px'
    }
  },
  created: function(){
    fetchSoftware({
      params:{
        id: this.id
      }}
    ).then((response) => {
      this.detail = response.data[0].description
      }).catch((error) => {
        console.log(error)
      })
  }
  
}
</script>
<style>

</style>

