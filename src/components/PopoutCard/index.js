import PopoutCard from './PopoutCard.vue'

const install = (App) => {
  console.log("install from PopoutCard/index.js")
  App.component("PopoutCard", PopoutCard)
}
export { PopoutCard, install }
export default PopoutCard