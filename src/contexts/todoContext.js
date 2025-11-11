import { createContext, useContext, createElement, useState } from "react";

const TodoContext = createContext();

// category: personal, work
//  status: completed, pending, removed
//  priority: low, medium, high

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState({});

  const setTodoListHandler = (newTodoList) => {
    setTodoList({ ...todoList, ...newTodoList });
  };
  const cateGoryFilter = (filter) => {
    const foundCategory = todoList.filter((todo) => todo.category === filter);
    setTodoList(foundCategory);
  };
  const statusFilter = (filter) => {
    const foundStatus = todoList.filter((todo) => todo.status === filter);
    setTodoList(foundStatus);
  };
  const priorityFilter = (filter) => {
    const foundPriority = todoList.filter((todo) => todo.priority === "filter");
    setTodoList(foundPriority);
  };
  return createElement(
    TodoContext.Provider,
    {
      value: {
        todoList,
        setTodoList,
        cateGoryFilter,
        statusFilter,
        priorityFilter,
      },
    },
    children
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export { TodoProvider, useTodoContext };
