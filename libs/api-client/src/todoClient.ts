import {
  CreateTodoRequest,
  CreateTodoResponse,
  DeleteTodoResponse,
  GetTodoListResponse,
  GetTodoResponse,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from "@tododo/contract"
import axios from "axios"
import { API_URL } from "./config"

export const getTodoList = async (): Promise<GetTodoListResponse> => {
  const res = await axios.get(`${API_URL}/api/todo`)
  return res.data
}

export const getTodo = async (id: string): Promise<GetTodoResponse> => {
  const res = await axios.get(`${API_URL}/api/todo/${id}`)
  return res.data
}

export const createTodo = async (
  data: CreateTodoRequest,
): Promise<CreateTodoResponse> => {
  const res = await axios.post(`${API_URL}/api/todo`, data)
  return res.data
}

export const updateTodo = async (
  id: string,
  data: UpdateTodoRequest,
): Promise<UpdateTodoResponse> => {
  const res = await axios.put(`${API_URL}/api/todo/${id}`, data)
  return res.data
}

export const deleteTodo = async (id: string): Promise<DeleteTodoResponse> => {
  const res = await axios.delete(`${API_URL}/api/todo/${id}`)
  return res.data
}
