import { Center, Container, Heading, Spinner } from "@chakra-ui/react"
import { useTodoList } from "@tododo/app-core"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"

export function App() {
  const { data: todoList, isLoading: isLodingTodoList } = useTodoList()

  return (
    <Container p="4">
      <Heading mb="3" textAlign="center">
        Tododo
      </Heading>
      <TodoInput />
      {isLodingTodoList && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}
      {todoList?.map((todo) => {
        return <TodoItem key={todo._id} todo={todo} />
      })}
    </Container>
  )
}

export default App
