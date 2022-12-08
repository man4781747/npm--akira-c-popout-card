<template>
  <div style="margin: 8px;">
    <PopoutCard v-if="blockWindowOpen" @closeWindow="blockWindowOpen=false"
      :loadingWindow="loadingWindow"
    >
      <div class="card-header">
        Card-header
      </div>
      <div class="card-body">
        Card-body
      </div>
      <div class="card-footer">
        <button @click="loadingTest">Loading功能測試</button>
      </div>
    </PopoutCard>
    <button @click="blockWindowOpen=true">Test</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      blockWindowOpen: false,
      loadingWindow: false
    };
  },
  methods: {
    loadingTest () {
      this.loadingWindow = true
      var This = this
      setTimeout(() => {
        this.loadingWindow = false
      }, 1000)
    },
  },
  mounted(){
  }
}
</script>

<style scoped>

</style>
