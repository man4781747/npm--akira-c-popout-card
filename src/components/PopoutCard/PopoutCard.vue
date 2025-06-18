<template>
  <transition name="blank-background-anime">
    <div class="akira-c-blank-background" v-if="isOpen"></div>
  </transition>
  <transition name="pop-window-anime">
    <div class="akira-card" @click.stop="closeWindow" v-if="isOpen">
      <div class="card" @click.stop>
        <transition name="loading-window-anime">
          <div class="card-loading" v-if="loadingWindow">wait...</div>
        </transition>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import './PopoutCard.css';

// PopoutCard.vue: A reusable Vue component for displaying modal-like pop-out cards.
// It features a loading state and customizable content via slots.
export default {
  name: 'PopoutCard',
  components: {},
  props: {
    // loadingWindow: Controls the visibility of the loading overlay.
    // Type: Boolean
    // Default: false
    // When true, a "wait..." message is displayed, and the card cannot be closed by clicking the background.
    loadingWindow: {
      type: Boolean,
      default: false,
    }
  },
  // Emits: Defines the events that this component can emit.
  // - closeWindow: Emitted when the card is requested to be closed (e.g., by clicking the background or programmatically).
  //   The parent component should handle this event to hide the card (e.g., by setting a v-if directive to false).
  emits: ["closeWindow"],
  data() {
    return {
      // isOpen: Controls the visibility and animations of the card and its backdrop.
      // When true, the card and backdrop are visible and enter animations play.
      // When false, leave animations play, and then the elements can be removed from the DOM by the parent.
      isOpen: false
    };
  },
  methods: {
    // closeWindow(): Method to initiate the closing of the card.
    closeWindow () {
      // Prevents closing the card if the loadingWindow prop is true. This is a safety measure.
      if (this.loadingWindow == false) {
        // Sets isOpen to false to trigger the leave animation for the card and backdrop.
        this.isOpen = false
        var This = this // Store 'this' context for use in setTimeout.
        // setTimeout: Delays emitting the 'closeWindow' event.
        // This delay (500ms) ensures that the leave animation has sufficient time to complete
        // before the parent component potentially removes the card from the DOM (e.g., via v-if).
        // Potential Risk: If the component instance is destroyed before this callback executes
        // (e.g., parent immediately removes it without waiting for 'closeWindow' event),
        // the this.$emit("closeWindow") might not be called or could lead to errors if 'This' context is lost.
        // However, in typical Vue v-if scenarios, this is generally handled well by Vue's lifecycle.
        setTimeout(() => {
          This.$emit("closeWindow")
        }, 500)
      }
    }
  },
  // mounted(): Vue lifecycle hook called after the component has been mounted to the DOM.
  mounted(){
    // this.$nextTick: Defers the execution of the callback until the next DOM update cycle.
    // This ensures that the component is fully rendered and in the DOM, allowing transitions
    // to be applied correctly when `isOpen` becomes `true`.
    // Setting isOpen to true here triggers the enter animation for the card and backdrop.
    this.$nextTick(function () {
      this.isOpen = true
    })
  }
}
</script>

<!-- Scoped PostCSS styles for the PopoutCard component. -->
<!-- These styles define the appearance and animations for the card, backdrop, and loading overlay. -->
<!-- `scoped` ensures that these styles only apply to this component, preventing conflicts with global styles. -->
<style lang="postcss" scoped>
</style>