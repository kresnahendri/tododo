import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { initApiClientConfig } from "@tododo/api-client"
import { StrictMode } from "react"
import * as ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import App from "./app/app"

initApiClientConfig({ apiUrl: process.env["NX_API_URL"] || "" })

const chakraTheme = extendTheme({
  shadows: {
    outline: "none",
  },
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function Main() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={chakraTheme}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"))
