import React from "react"
import { Center, Flex, Heading, ScrollView, Spinner } from "native-base"
import { SafeAreaView } from "react-native"
import { useTodoList } from "@tododo/app-core"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"

export function App() {
  const { data: todoList, isLoading: isLodingTodoList } = useTodoList()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Flex flex={1} p="4">
          <Heading mb="3" textAlign="center">
            Tododo
          </Heading>
          <TodoInput />
          {isLodingTodoList && (
            <Center>
              <Spinner size="lg" />
            </Center>
          )}
          {todoList?.map((todo) => {
            return <TodoItem key={todo._id} todo={todo} />
          })}
        </Flex>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
