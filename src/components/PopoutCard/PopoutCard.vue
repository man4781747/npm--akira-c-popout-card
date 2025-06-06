<template>
  <!-- Transition for the backdrop -->
  <transition name="blank-background-anime">
    <!-- Backdrop element, shown when the card is open -->
    <div class="akira-c-blank-background" v-if="isOpen"></div>
  </transition>
  <!-- Transition for the pop-out card window -->
  <transition name="pop-window-anime">
    <!-- Main card container, allows closing by clicking outside the card content -->
    <div class="akira-card" @click.stop="closeWindow" v-if="isOpen">
      <!-- Inner card content area, prevents clicks inside from closing the card -->
      <div class="card" @click.stop>
        <!-- Transition for the loading overlay -->
        <transition name="loading-window-anime">
          <!-- Loading overlay, shown when loadingWindow prop is true -->
          <div class="card-loading" v-if="loadingWindow">wait...</div>
        </transition>
        <!-- Slot for customizable card content -->
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
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
/* Styles for the backdrop element. */
.akira-c-blank-background {
  background-color: rgba(0,0,0,.5); /* Semi-transparent black background. */
  position: absolute; /* Positioned relative to the nearest positioned ancestor or initial containing block. */
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  /* z-index: Ensures the backdrop is above other page content but below the card.
     Might need adjustment in complex applications if other high z-index elements exist. */
  z-index:100;
}
/* Styles for the main card container. */
.akira-card {
  position: absolute; /* Positioned relative to the nearest positioned ancestor or initial containing block. */
  opacity: 1;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  /* z-index: Ensures the card is above the backdrop and other page content.
     Might need adjustment in complex applications if other high z-index elements exist. */
  z-index:101;
  & .card { /* Styles for the inner card content area. */
    height: fit-content; /* Card height adjusts to its content. */
    margin-top: 3rem; /* Top margin to position the card. */
    max-width: calc( 100% - 16px ) ; /* Maximum width, leaving some space from viewport edges. */
    min-width: 300px ; /* Minimum width for the card. */
    min-height: 1rem; /* Minimum height for the card. */
    overflow: hidden; /* Hides content that overflows the card's boundaries. */
    & .card-loading { /* Styles for the loading overlay. */
      position: absolute; /* Positioned relative to the inner card. */
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,.8); /* Semi-transparent dark background for loading. */
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff; /* White text color for "wait..." message. */
      font-size: 2rem; /* Large font size for the message. */
    }
  }
}

/* Animation styles for the backdrop. */
/* Animation timings (e.g., .5s) should correspond to any related JavaScript logic (like the setTimeout in closeWindow). */
.blank-background-anime-leave-active, .blank-background-anime-enter-active {
  transition: all .5s ease;
}

.blank-background-anime-enter-from {
  background-color: rgba(0,0,0,0); /* Start with a fully transparent background. */
}

.blank-background-anime-leave-to {
  background-color: rgba(0,0,0,0); /* End with a fully transparent background. */
}

/* Animation styles for the pop-out card window. */
/* Animation timings (e.g., .5s) should correspond to any related JavaScript logic (like the setTimeout in closeWindow). */
.pop-window-anime-leave-active, .pop-window-anime-enter-active {
  transition: all .5s ease;
}

.pop-window-anime-enter-from {
  margin-top: -10rem; /* Start position from above, off-screen. */
  opacity: 0; /* Start fully transparent. */
}

.pop-window-anime-leave-to {
  opacity: 0; /* End fully transparent. */
  margin-top: 10rem; /* End position below, off-screen. */
}

/* Animation styles for the loading overlay. */
/* Animation timings (e.g., .25s) are independent here but good to keep consistent if related. */
.loading-window-anime-leave-active, .loading-window-anime-enter-active {
  transition: all .25s ease;
}

.loading-window-anime-enter-from {
  opacity: 0; /* Start fully transparent. */
}

.loading-window-anime-leave-to {
  opacity: 0; /* End fully transparent. */
}

</style>