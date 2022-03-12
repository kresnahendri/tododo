import { Container, Heading } from "@chakra-ui/react"
import { Todo } from "@tododo/contract"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"

const TODO_LIST_MOCK: Todo[] = [
  {
    _id: "1",
    content: "Learn Typescript",
    completed: false,
  },
  {
    _id: "2",
    content: "Learn React",
    completed: false,
  },
]
export function App() {
  const handleCreateTodo = (todoContent: string) => {
    // TODO: create todo
  }
  const todoList = TODO_LIST_MOCK

  return (
    <Container p="4">
      <Heading mb="3" textAlign="center">
        Tododo
      </Heading>
      <TodoInput onSubmit={handleCreateTodo} />
      {todoList.map((todo) => {
        return <TodoItem key={todo._id} todo={todo} />
      })}
    </Container>
  )
}

export default App
