import PopoutCard from "../src/components/PopoutCard";

export { PopoutCard }

const components = [PopoutCard]

const install = (App) => {
  components.forEach((item) => {
    App.component("PopoutCard", PopoutCard)
  })
}

export default {
  install
}