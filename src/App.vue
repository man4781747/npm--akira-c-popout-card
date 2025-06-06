<template>
  <div style="height: 100vh;" class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12 d-grid gap-2">
          <PopoutCard v-if="blockWindowOpen" @closeWindow="blockWindowOpen=false"
            :loadingWindow="loadingWindow"
          >
          <div class="card-header">
            Clicking the gray area outside the window will close it.
          </div>
          <div class="card-body">
            This window cannot be closed while loading status.
          </div>
          <div class="card-footer">
            <button @click="loadingTest" class="btn btn-info">Loading Test</button>
          </div>
          </PopoutCard>
          <h4># main.js</h4>
          <pre><code class="language-js">import PopoutCard from 'akira-c-uploadtest'
createApp(App).use(PopoutCard).mount('#app')</code></pre>
          <h4># App.vue</h4>
        <pre><code class="language-html">&lt;PopoutCard v-if="blockWindowOpen" @closeWindow="blockWindowOpen=false" :loadingWindow="loadingWindow">
  &lt;div class="card-header">
    Clicking the gray area outside the window will close it.
  &lt;/div>
  &lt;div class="card-body">
    This window cannot be closed while loading status.
  &lt;/div>
  &lt;div class="card-footer">
    &lt;button @click="loadingTest" class="btn btn-info">Loading Test&lt;/button>
  &lt;/div>
&lt;/PopoutCard>
&lt;script>
export default {
  data() {
    return {
      blockWindowOpen: false,
      loadingWindow: false
    };
  },
}
&lt;/script>
</code></pre>
          <button @click="blockWindowOpen=true" class="btn btn-info" style="font-size: 3rem;">Click to show PopoutCard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// App.vue: Serves as an example implementation and testbed for the PopoutCard component.
// It demonstrates how to use PopoutCard, including its props, events, and slots.
export default {
  name: 'App',
  components: {}, // PopoutCard is registered globally or locally if this were a real app build
  data() {
    return {
      // blockWindowOpen: Controls the visibility of the PopoutCard in this example.
      // Type: Boolean
      // When true, the PopoutCard is rendered; when false, it's not.
      blockWindowOpen: false,
      // loadingWindow: Controls the loadingWindow prop of the PopoutCard.
      // Type: Boolean
      // Used to demonstrate the loading state feature of the PopoutCard.
      loadingWindow: false
    };
  },
  methods: {
    // loadingTest(): Simulates an asynchronous operation to demonstrate the loading state.
    loadingTest () {
      // Set loadingWindow to true to show the loading overlay on the PopoutCard.
      this.loadingWindow = true
      var This = this // Store 'this' context for use in setTimeout.
      // After a 1-second delay, set loadingWindow back to false.
      setTimeout(() => {
        This.loadingWindow = false
      }, 1000)
    },
  },
  mounted(){
    // Lifecycle hook, can be used for initial setup if needed.
  }
}
</script>

<style scoped>
/* Scoped styles for App.vue. These styles will only apply to this component. */
/* Add any specific styles for the App component itself if needed. */
</style>
