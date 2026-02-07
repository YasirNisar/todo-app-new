import { useContext } from "react";
import  todoContext  from "../context/TodoContext";

export function useTodos() {
  const context = useContext(todoContext);

  if (!context) {
    throw new Error("useTodos must be used inside TodoProvider");
  }

  return context;
}