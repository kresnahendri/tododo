import { Box, Input, useToast } from "@chakra-ui/react"
import { useCreateTodo } from "@tododo/app-core"
import React, { useState } from "react"

const TodoInput: React.FC = () => {
  const [content, setContent] = useState("")
  const toast = useToast()
  const { mutate: createTodo, isLoading } = useCreateTodo({
    onSuccess: () => setContent(""),
    onError(err) {
      toast({
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
        value={content}
        placeholder="What are you gonna do?"
        borderRadius={0}
        onChange={(e) => {
          setContent(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter" && content.length > 0) {
            createTodo({ content })
          }
        }}
        mb="8"
        disabled={isLoading}
      />
    </Box>
  )
}

export default TodoInput
