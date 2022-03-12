import { Box, Input, useToast } from "native-base"
import { useCreateTodo } from "@tododo/app-core"
import React, { useState } from "react"

const TodoInput: React.FC = () => {
  const [content, setContent] = useState("")
  const toast = useToast()
  const { mutate: createTodo, isLoading } = useCreateTodo({
    onSuccess: () => setContent(""),
    onError(err) {
      toast.show({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    },
  })
  return (
    <Box>
      <Input
        size="2xl"
        value={content}
        placeholder="What are you gonna do?"
        borderRadius={0}
        onChangeText={(value) => setContent(value)}
        onSubmitEditing={() => createTodo({ content })}
        mb="8"
        isDisabled={isLoading}
      />
    </Box>
  )
}

export default TodoInput
