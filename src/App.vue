<template>
  <div style="margin: 8px;">
    <!-- PopoutCard component instance -->
    <!-- v-if="blockWindowOpen": Conditionally renders the PopoutCard based on the blockWindowOpen data property. -->
    <!-- @closeWindow="blockWindowOpen=false": Handles the closeWindow event emitted by PopoutCard.
         When the event occurs, it sets blockWindowOpen to false, hiding the card. -->
    <!-- :loadingWindow="loadingWindow": Binds the loadingWindow data property to the PopoutCard's loadingWindow prop.
         This controls the loading overlay visibility on the card. -->
    <PopoutCard v-if="blockWindowOpen" @closeWindow="blockWindowOpen=false"
      :loadingWindow="loadingWindow"
    >
      <!-- Slot #card-header: Content for the header section of the PopoutCard. -->
      <div class="card-header">
        Card-header
      </div>
      <!-- Slot #card-body: Content for the main body section of the PopoutCard. -->
      <div class="card-body">
        Card-body
      </div>
      <!-- Slot #card-footer: Content for the footer section of the PopoutCard. -->
      <div class="card-footer">
        <!-- Button to trigger the loadingTest method, demonstrating the loading feature. -->
        <button @click="loadingTest">Loading功能測試</button>
      </div>
    </PopoutCard>
    <!-- Button to open the PopoutCard by setting blockWindowOpen to true. -->
    <button @click="blockWindowOpen=true">Test</button>
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
