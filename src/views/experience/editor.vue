<template>
  <div>
    <el-input v-model="caption" placeholder="标题"></el-input>
    <editor v-model="detail"/>
    <div id="release"><el-button type="primary" @click="upload">发布</el-button></div>
  </div>
</template>

<script>
import Editor from '@toast-ui/vue-editor/src/Editor.vue' 
import {uploadExperience} from '../../api/api'
export default {
  name: 'Detail',
  data (){
    return {
      id: this.$route.params.id,
      detail: '',
      caption: ''
    }
  },
  components: {
    'editor': Editor
  },
  methods: {
    upload: function(){
      uploadExperience({
          title: this.caption,
          description: this.detail
      }).then(reponse => 
        console.log(reponse)
      )
    }
  }
}
</script>
<style scoped>
#release{
  float:right;

}
</style>

