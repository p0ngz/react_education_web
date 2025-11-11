// todo reducer
import dayjs from "dayjs";
const dateStamp = dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
const todoInItialState = {
  todos: [
    {
      id: 1,
      text: "Complete project documentation",
      description: "Write comprehensive documentation for the new feature",
      status: "pending", // pending | completed
      priority: "high",
      category: "work",
      dueDate: "2025-11-15",
      createdAt: "2025-11-10T10:00:00Z",
      updatedAt: "2025-11-10T10:00:00Z",
    },
    {
      id: 2,
      text: "Buy groceries",
      description: "Milk, eggs, bread, vegetables",
      status: "pending",
      priority: "medium",
      category: "personal",
      dueDate: "2025-11-11",
      createdAt: "2025-11-10T09:30:00Z",
      updatedAt: "2025-11-10T09:30:00Z",
    },
    {
      id: 3,
      text: "Review pull requests",
      description: "Review pending PRs from team members",
      status: "completed",
      priority: "high",
      category: "work",
      dueDate: "2025-11-10",
      createdAt: "2025-11-09T14:00:00Z",
      updatedAt: "2025-11-10T11:00:00Z",
      completedAt: "2025-11-10T11:00:00Z",
    },
  ],
  filter: {
    status: "all", // all, active, completed
    category: "all", // all, work, personal, etc.
    priority: "all", // all, low, medium, high
    searchQuery: "",
    sortBy: "createdAt", // createdAt, dueDate, priority, text
    sortOrder: "desc", // asc, desc
  },
  categories: ["work", "personal", "shopping", "health", "learning"],
  stats: {
    total: 3,
    completed: 1,
    pending: 2,
    overdue: 0,
  },
  // ui: {
  //   isLoading: false,
  //   error: null,
  //   selectedTodoId: null,
  //   showCompleted: true,
  // },
  lastId: 3, // Track last used ID for auto-increment
};

const todoActionHandler = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = {
        id: state.lastId + 1,
        ...action.payload,
        createdAt: dateStamp,
        updatedAt: dateStamp,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        stats: {
          total: state.stats.total + 1,
          pending: state.stats.pending + 1,
          ...state.stats,
        },
        lastId: state.lastId + 1,
      };
    }
    case "EDIT_TODO": {
      const foundTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (!foundTodo) return state;

      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload, updatedAt: dateStamp }
          : todo
      );

      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case "REMOVE_TODO": {
      const afterRemoveTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      console.log("afterRemoveTodos", afterRemoveTodos);
      return {
        ...state,
        todos: [...afterRemoveTodos],
      };
    }
    case "TOGGLE_TODO": {
      const foundTodo = state.todos.find((todo) => {
        return todo.id === action.payload.id;
      });
      if (!foundTodo) return state;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status, updatedAt: dateStamp }
          : todo
      );

      return {
        ...state,
        todos: updatedTodos,
      };
    }
    default:
      return state;
  }
};
export { todoInItialState, todoActionHandler };
