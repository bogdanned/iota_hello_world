import {render} from 'react-dom'
import React from 'react'

import App from "./components/App"


const renderApp = (Component) => {
  render(<div>IOTA Hello!</div>, document.getElementById("app"))
}

renderApp(App)

if(module.hot){
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default
    renderApp(NextApp)
  })
}
