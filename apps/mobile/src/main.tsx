import { AppRegistry } from "react-native"
import React from "react"
import { NativeBaseProvider } from "native-base"
import App from "./app/App"

function Main() {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  )
}

AppRegistry.registerComponent("main", () => Main)
