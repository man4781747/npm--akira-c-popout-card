# Akira-C Popout Card

A Vue 3 component that provides a pop-out card interface, often used for modals or dialogs. It includes features like a loading state and customizable content.

## Demo
 * [Demo Page](https://man4781747.github.io/Vue3__PopoutCard__Demo/)

## Installation

Install the component using npm:

```bash
npm install akira-c-popout-card
```

## Usage

### 1. Import and use the component in your Vue application:

```typescript
<template>
  <PopoutCard v-if="isCardVisible" @closeWindow="isCardVisible = false" :loadingWindow="isLoading">
    <div class="card-header">My Card Title</div>
    <div class="card-body">
      <p>This is the content of the card.</p>
    </div>
    <div class="card-footer">
      <button @click="performAction" class="btn btn-info">Do Something</button>
    </div>
  </PopoutCard>
  <button @click="isCardVisible = true" class="btn btn-info">Open Card</button>
</template>

<script>
import PopoutCard from 'akira-c-popout-card'; // Adjust path if necessary if used locally
export default {
  components: {
    PopoutCard
  },
  data() {
    return {
      isCardVisible: false,
      isLoading: false
    };
  },
  methods: {
    performAction() {
      this.isLoading = true;
      // Simulate an async action
      setTimeout(() => {
        this.isLoading = false;
        this.isCardVisible = false;
      }, 2000);
    }
  }
};
</script>
```

### 2. Import with global

in main.ts
```typescript
import { install as PopoutCard } from 'akira-c-popout-card'
app.use(PopoutCard)
```

in xxx.vue
```typescript
<template>
  <PopoutCard v-if="isCardVisible" @closeWindow="isCardVisible = false" :loadingWindow="isLoading">
    <div class="card-header">My Card Title</div>
    <div class="card-body">
      <p>This is the content of the card.</p>
    </div>
    <div class="card-footer">
      <button @click="performAction" class="btn btn-info">Do Something</button>
    </div>
  </PopoutCard>
  <button @click="isCardVisible = true" class="btn btn-info">Open Card</button>
</template>

<script>
export default {
  data() {
    return {
      isCardVisible: false,
      isLoading: false
    };
  },
  methods: {
    performAction() {
      this.isLoading = true;
      // Simulate an async action
      setTimeout(() => {
        this.isLoading = false;
        this.isCardVisible = false;
      }, 2000);
    }
  }
};
</script>
```

## Props

- `loadingWindow` (Boolean, default: `false`): Controls the visibility of the loading overlay. When true, a "wait..." message is displayed, and the card cannot be closed by clicking the background.

## Emitted Events

- `closeWindow`: Emitted when the card is requested to be closed (e.g., by clicking the background or programmatically). The parent component should handle this event to hide the card (e.g., by setting the v-if directive to false).
