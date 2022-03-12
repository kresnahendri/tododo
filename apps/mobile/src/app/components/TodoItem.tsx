import {
  Checkbox,
  CloseIcon,
  Flex,
  Heading,
  Input,
  useToast,
} from "native-base"
import { JsendError, Todo } from "@tododo/contract"
import React, { useRef, useState } from "react"
import { useDeleteTodo, useUpdateTodo } from "@tododo/app-core"
import { Pressable } from "react-native"

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const ref = useRef(null)
  const toast = useToast()
  const [todoEdit, setTodoEdit] = useState<Todo | null>(null)

  const handleError = (err: JsendError) => {
    toast.show({
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
      flex={1}
      flexDirection="row"
      key={todo._id}
      borderWidth={1}
      borderStyle="solid"
      borderColor="black"
      mb="5"
      p="4"
      px="2"
      pr="5"
      width="full"
      justifyContent="space-between"
      alignItems="center">
      <Flex flex={1} pr="4">
        {todoEdit?._id === todo._id ? (
          <Input
            ref={ref}
            borderRadius={0}
            mr="6"
            defaultValue={todo.content}
            onChangeText={(value) => setTodoEdit({ ...todo, content: value })}
            onSubmitEditing={() => handleUpdate()}
          />
        ) : (
          <Heading
            size="sm"
            onPress={handleSelect}
            textDecoration={todo.completed ? "line-through" : "none"}
            width="full">
            {todo.content}
          </Heading>
        )}
      </Flex>
      <Checkbox
        accessibilityLabel="Done"
        value=""
        isChecked={todo.completed}
        rounded="full"
        size="sm"
        onChange={() => handleCheck(!todo.completed)}
      />
      <Pressable
        onPress={() => handleDelete()}
        style={{ position: "absolute", right: -8, top: -8, zIndex: 1 }}>
        <Flex
          w={5}
          h={5}
          background="white"
          borderRadius="full"
          borderWidth={1}
          borderStyle="solid"
          borderColor="black"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          backgroundColor="red.500">
          <CloseIcon size="3" mt="0.5" color="black" />
        </Flex>
      </Pressable>
    </Flex>
  )
}

export default TodoItem
