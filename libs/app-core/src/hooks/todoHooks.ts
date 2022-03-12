import {
  getTodoList,
  getTodo,
  updateTodo,
  createTodo,
  deleteTodo,
} from "@tododo/api-client"
import {
  CreateTodoRequest,
  DeleteTodoResponse,
  JsendError,
  Todo,
  UpdateTodoRequest,
} from "@tododo/contract"
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseMutationOptions,
  useQueryClient,
} from "react-query"

type QueryOptions<T> =
  | Omit<UseQueryOptions<JsendError | T, JsendError, T>, "queryKey" | "queryFn">
  | undefined

type MutationOptions<T, V> = Omit<
  UseMutationOptions<T, JsendError, V, unknown>,
  "mutationFn" | "mutationKey"
>

export const useTodoList = (opts?: QueryOptions<Todo[]>) => {
  return useQuery(
    "todoList",
    () =>
      getTodoList()
        .then((res) => res.data)
        .then((res) => res.todos),
    opts,
  )
}

export const useTodo = (id: string, opts?: QueryOptions<Todo>) => {
  return useQuery(
    ["todo", id],
    () =>
      getTodo(id)
        .then((res) => res.data)
        .then((res) => res.todo),
    opts,
  )
}

export const useUpdateTodo = (
  additionalOpts: { onSettled: () => void },
  opts?: MutationOptions<Todo, { id: string; payload: UpdateTodoRequest }>,
) => {
  const queryClient = useQueryClient()
  return useMutation(
    (params) =>
      updateTodo(params.id, params.payload)
        .then((res) => res.data)
        .then((res) => res.todo),
    {
      onSettled: () => {
        additionalOpts.onSettled()
        queryClient.invalidateQueries("todoList")
      },
      ...opts,
    },
  )
}

export const useCreateTodo = (
  opts?: MutationOptions<Todo, CreateTodoRequest>,
) => {
  const queryClient = useQueryClient()
  return useMutation(
    (content) =>
      createTodo(content)
        .then((res) => res.data)
        .then((res) => res.todo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todoList")
      },
      ...opts,
    },
  )
}

export const useDeleteTodo = (
  opts?: MutationOptions<DeleteTodoResponse, string>,
) => {
  const queryClient = useQueryClient()
  return useMutation((id) => deleteTodo(id), {
    onSettled: () => {
      queryClient.invalidateQueries("todoList")
    },
    ...opts,
  })
}
