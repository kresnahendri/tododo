import { Box, Input } from "@chakra-ui/react"
import React, { useState } from "react"

interface TodoInputProps {
  onSubmit: (value: string) => void
}
const TodoInput: React.FC<TodoInputProps> = ({ onSubmit }) => {
  const [content, setContent] = useState("")
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
            onSubmit(content)
          }
        }}
        mb="8"
      />
    </Box>
  )
}

export default TodoInput
