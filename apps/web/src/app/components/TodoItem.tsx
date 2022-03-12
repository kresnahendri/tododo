import {
  Checkbox,
  Flex,
  Heading,
  Input,
  useOutsideClick,
  useToast,
} from "@chakra-ui/react"
import { JsendError, Todo } from "@tododo/contract"
import React, { useRef, useState } from "react"
import { CloseIcon } from "@chakra-ui/icons"
import { useDeleteTodo, useUpdateTodo } from "@tododo/app-core"

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const ref = useRef(null)
  const toast = useToast()
  const [todoEdit, setTodoEdit] = useState<Todo | null>(null)

  useOutsideClick({
    ref,
    handler: () => {
      if (todoEdit) {
        handleUpdate()
      }
    },
  })

  const handleError = (err: JsendError) => {
    toast({
      title: "Error",
      description: err.message,
      status: "error",
      duration: 3000,
      isClosable: true,
    })
  }

  const { mutate: updateTodo } = useUpdateTodo(
    { onSettled: () => setTodoEdit(null) },
    { onError: handleError },
  )

  const { mutate: deleteTodo } = useDeleteTodo({
    onError: handleError,
  })

  const handleUpdate = () => {
    updateTodo({
      id: todo._id,
      payload: {
        completed: todoEdit?.completed,
        content: todoEdit?.content,
      },
    })
  }

  const handleCheck = (completed: boolean) => {
    updateTodo({
      id: todo._id,
      payload: { completed },
    })
  }

  const handleDelete = () => {
    deleteTodo(todo._id)
  }

  const handleSelect = () => {
    setTodoEdit(todo)
  }

  return (
    <Flex
      position="relative"
      key={todo._id}
      border="1px"
      mb="4"
      p="4"
      width="full"
      justifyContent="space-between">
      {todoEdit?._id === todo._id ? (
        <Input
          ref={ref}
          borderRadius={0}
          mr="6"
          defaultValue={todo.content}
          onChange={(e) => setTodoEdit({ ...todo, content: e.target.value })}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleUpdate()
            }
          }}
        />
      ) : (
        <Heading
          as="h3"
          size="md"
          onClick={handleSelect}
          textDecoration={todo.completed ? "line-through" : "none"}
          width="full">
          {todo.content}
        </Heading>
      )}
      <Checkbox
        isChecked={todo.completed}
        rounded="full"
        size="lg"
        onChange={() => handleCheck(!todo.completed)}
      />
      <Flex
        zIndex={1}
        w={5}
        h={5}
        position="absolute"
        right={-2}
        top={-2}
        background="white"
        borderRadius="full"
        border="1px"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={() => handleDelete()}
        backgroundColor="red.200">
        <CloseIcon fontSize="xs" fontWeight="bold" />
      </Flex>
    </Flex>
  )
}

export default TodoItem
