
<template>
  <div>
    <editor v-model="detail"/>
    <!-- <vue-disqus shortname="oouxx" title="这是编程详情页的评论" :identifier="this.$route.params.id" >disqus</vue-disqus> -->
    <vue-git-comment :options="options" />

</div>
</template>

<script>
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue' 
import { fetchProgram } from '../../api/api'
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
        uuid: 'program_detail_'+this.$route.params.id
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
    fetchProgram({
      params:{
        id: this.id
      }
    }
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

