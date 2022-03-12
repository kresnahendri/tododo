import { Box, Input } from "@chakra-ui/react"
import { useCreateTodo } from "@tododo/app-core"
import React, { useState } from "react"
import { useQueryClient } from "react-query"

const TodoInput: React.FC = () => {
  const [content, setContent] = useState("")
  const queryClient = useQueryClient()
  const { mutate: createTodo, isLoading } = useCreateTodo({
    onSuccess: () => setContent(""),
    onSettled: () => queryClient.invalidateQueries("todoList"),
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
