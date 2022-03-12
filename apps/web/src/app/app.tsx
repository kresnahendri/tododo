import { Container, Heading } from "@chakra-ui/react"
import { getTodoList } from "@tododo/api-client"
import { Todo } from "@tododo/contract"
import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"

export function App() {
  const handleCreateTodo = (todoContent: string) => {
    // TODO: create todo
  }
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    getTodoList()
      .then((res) => res.data.todos)
      .then(setTodoList)
  }, [])

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
