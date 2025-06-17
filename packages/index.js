/**
 * Entry point for the PopoutCard component library
 * 彈出卡片組件庫的入口文件
 */

// Import the PopoutCard component from the source directory
// 從源目錄導入 PopoutCard 組件
import PopoutCard from "../src/components/PopoutCard";

// Import the component's styles
// 導入組件的樣式
import '../src/components/PopoutCard/PopoutCard.vue?inline'

// Array of components to be registered
// 要註冊的組件數組
const components = [PopoutCard]

/**
 * Installation function for Vue plugin
 * Vue 插件的安裝函數
 * 
 * @param {Object} App - The Vue application instance
 * @param {Object} App - Vue 應用實例
 * 
 * This function registers all components globally in the Vue application
 * 此函數在 Vue 應用中全局註冊所有組件
 */
const install = (App) => {
  components.forEach((item) => {
    App.component("PopoutCard", PopoutCard)
  })
}

/**
 * Export the component and installation function
 * 導出組件和安裝函數
 * 
 * PopoutCard: The main component that can be imported directly
 * PopoutCard: 可以直接導入的主組件
 * 
 * install: The plugin installation function for Vue.use()
 * install: 用於 Vue.use() 的插件安裝函數
 */
export { PopoutCard, install }