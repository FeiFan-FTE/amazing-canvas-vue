<template>
  <div class="home">
     <div id='canvas'></div>
     <button @click='handleOpen'>开始</button>
      <button @click='handleClose'>停止</button>
  </div>
</template>

<script>
import Fire from '@/libs/canvas'
export default {
  name: 'Home',
  components: {
 
  },
  data () {
    return {
          origin:{
            x:360,
            y:150,
            name:"test",
            action:1,
            count:20
          },
          target:null
    }
  },
  created () {
    
  },
  mounted () {
      this.target = new Fire('#canvas',this.origin,this.origin,{w:1600,h:780})
      this.target.init()
      console.log(this.target)
  },
  methods:{
    handleOpen(){
      this.target.move()
    },
    handleClose(){
      this.target.close()
    }
  }
}
</script>
