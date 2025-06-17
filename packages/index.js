import PopoutCard from "../src/components/PopoutCard";
import '../src/components/PopoutCard/PopoutCard.vue?inline'

const components = [PopoutCard]

const install = (App) => {
  components.forEach((item) => {
    App.component("PopoutCard", PopoutCard)
  })
}

export { PopoutCard, install }