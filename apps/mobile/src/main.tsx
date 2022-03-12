import { AppRegistry } from "react-native"
import React from "react"
import { NativeBaseProvider } from "native-base"
import { QueryClient, QueryClientProvider } from "react-query"
import { initApiClientConfig } from "@tododo/api-client"
import App from "./app/App"

/**
 * ! TODO: Native config config is still problem
 * ! need investigate more
 */
// const apiUrl =
//   Platform.OS === "android"
//     ? Config["NX_API_URL"].replace("localhost", "10.0.0.2")
//     : Config["NX_API_URL"]
const apiUrl = "http://localhost:4000"
initApiClientConfig({ apiUrl })

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function Main() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}

AppRegistry.registerComponent("main", () => Main)
