import {
  Checkbox,
  Flex,
  Heading,
  Input,
  useOutsideClick,
} from "@chakra-ui/react"
import { Todo } from "@tododo/contract"
import React, { useRef, useState } from "react"
import { CloseIcon } from "@chakra-ui/icons"

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [todoEdit, setTodoEdit] = useState<Todo | null>(null)
  const ref = useRef(null)
  useOutsideClick({
    ref,
    handler: () => {
      if (todoEdit) {
        handleUpdate()
      }
    },
  })

  const handleUpdate = () => {
    // TODO: update todo
  }

  const handleCheck = () => {
    // TODO: update todo
  }

  const handleUncheck = () => {
    // TODO: update todo
  }

  const handleDelete = () => {
    // TODO: delete todo
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
              setTodoEdit(null)
            }
          }}
        />
      ) : (
        <Heading
          as="h3"
          size="md"
          onClick={() => setTodoEdit(todo)}
          textDecoration={todo.completed ? "line-through" : "none"}>
          {todo.content}
        </Heading>
      )}

      <Checkbox
        isChecked={todo.completed}
        rounded="full"
        size="lg"
        onChange={() => {
          if (todo.completed) {
            handleUncheck()
          } else {
            handleCheck()
          }
        }}
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
