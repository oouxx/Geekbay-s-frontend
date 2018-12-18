<template>
  <div>
    <el-input v-model="caption" placeholder="标题"></el-input>
    <editor v-model="detail"/>
    <div id="release"><el-button type="primary" @click="upload">发布</el-button></div>
  </div>
</template>

<script>
import Editor from '@toast-ui/vue-editor/src/Editor.vue' 
import {uploadQuestion} from '../../api/api'
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
      uploadQuestion({
          title: this.caption,
          description: this.detail
      }).then(reponse => {
        this.$router.push({ path: '/question/list' })
      }
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

