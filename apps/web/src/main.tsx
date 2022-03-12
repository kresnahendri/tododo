import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { StrictMode } from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./app/app"

const chakraTheme = extendTheme({
  shadows: {
    outline: "none",
  },
})

function Main() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={chakraTheme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"))
