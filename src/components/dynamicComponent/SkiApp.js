import React from "react"
import SkiComponent from "./SkiComponent"

let skiDay = {
  total: 50,
  powder: 20,
  backCountry: 10,
  goal: 100,
}
const SkiApp = () => (
  <SkiComponent
    total={skiDay.total}
    powder={skiDay.powder}
    backCountry={skiDay.backCountry}
    goal={skiDay.goal}
  />
)

export default SkiApp
