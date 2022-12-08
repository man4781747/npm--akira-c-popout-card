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
export default {
  name: 'PopoutCard',
  components: {},
  props: {
    loadingWindow: {
      type: Boolean,
      default: false,
    }
  },
  emits: ["closeWindow"],
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    closeWindow () {
      if (this.loadingWindow == false) {
        this.isOpen = false
        var This = this
        setTimeout(() => {
          This.$emit("closeWindow")
        }, 500)
      }
    }
  },
  mounted(){
    this.$nextTick(function () {
      this.isOpen = true
    })
  }
}
</script>

<style lang="postcss" scoped>
.akira-c-blank-background {
  background-color: rgba(0,0,0,.5);
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index:100;
}
.akira-card {
  position: absolute;
  opacity: 1;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index:101;
  & .card {
    height: fit-content;
    margin-top: 3rem;
    max-width: calc( 100% - 16px ) ;
    min-width: 300px ;
    min-height: 1rem;
    overflow: hidden;
    & .card-loading {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,.8);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 2rem;
    }
  }
}


.blank-background-anime-leave-active, .blank-background-anime-enter-active {
  transition: all .5s ease;
}

.blank-background-anime-enter-from {
  background-color: rgba(0,0,0,0);
}

.blank-background-anime-leave-to {
  background-color: rgba(0,0,0,0);
}


.pop-window-anime-leave-active, .pop-window-anime-enter-active {
  transition: all .5s ease;
}

.pop-window-anime-enter-from {
  margin-top: -10rem;
  opacity: 0;
}

.pop-window-anime-leave-to {
  opacity: 0;
  margin-top: 10rem;
}

.loading-window-anime-leave-active, .loading-window-anime-enter-active {
  transition: all .25s ease;
}

.loading-window-anime-enter-from {
  opacity: 0;
}

.loading-window-anime-leave-to {
  opacity: 0;
}


</style>