import { useState, useEffect, useReducer, useRef } from "react";
import {
  todoInItialState,
  todoActionHandler,
} from "../../../customHook/todoReducer";
import { IconContext } from "react-icons";
import { BsGearFill } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { CiSquareRemove } from "react-icons/ci";
import SelectMenu from "../../shared/SelectMenu";
import SelectDate from "../../shared/SelectDate";

const categoryMenu = {
  mode: "Category",
  menus: ["work", "personal", "shopping", "health", "learning"],
};
const priorityMenu = {
  mode: "Priority",
  menus: ["low", "medium", "high"],
};

const TodoReducer = () => {
  const [todo, setTodo] = useState("");
  const [descriptionTxt, setDescriptionTxt] = useState("");
  const [textBtn, setTextBtn] = useState("ADD_TODO");
  const [category, setCategory] = useState("personal");
  const [priority, setPriority] = useState("medium");
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState("ADD_TODO");
  const [placeholderTxt, setPlaceholderTxt] = useState("todo...");
  const [idTodo, setIdTodo] = useState(null);
  const [idToggleTodo, setIdToggleTodo] = useState(null);
  const [todoState, dispatchTodoAction] = useReducer(
    todoActionHandler,
    todoInItialState
  );
  const inputTodoRef = useRef(null);

  const receiveFromSelectMenu = (mode, filter) => {
    if (mode === "Category") {
      setCategory(filter);
    } else if (mode === "Priority") {
      setPriority(filter);
    }
  };
  const receiveFromSelectCalendar = (date) => {
    if (date) setDate(date);
  };

  const setTextBtnHandler = (mode) => {
    if (mode === "ADD_TODO") {
      setTextBtn("ADD_TODO");
    } else if (mode === "EDIT_TODO") {
      setTextBtn("EDIT_TODO");
    }
  };
  const setEditHandler = async (id = null) => {
    // add, edit
    inputTodoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    inputTodoRef.current?.focus({ preventScroll: true });

    setMode("EDIT_TODO"); // edit
    setIdTodo(id);
    const foundTodo = await todoState.todos.find((todo) => todo.id === id);
    setTodo(foundTodo ? foundTodo.text : "");
    setDescriptionTxt(foundTodo ? foundTodo.description : "");
    setCategory(foundTodo ? foundTodo.category : "personal");
    setPriority(foundTodo ? foundTodo.priority : "medium");
    setDate(foundTodo ? foundTodo.dueDate : null);
  };
  const setTodoHandler = (value) => {
    setTodo(value);
  };
  const setDescriptionTxtHandler = (value) => {
    setDescriptionTxt(value);
  };
  const removeTodoHandler = (id) => {
    setMode("REMOVE_TODO");
    dispatchTodoAction({
      type: "REMOVE_TODO",
      payload: {
        id: id,
      },
    });
  };
  const toggleTodoHandler = (id) => {
    setIdToggleTodo(id);
    dispatchTodoAction({
      type: "TOGGLE_TODO",
      payload: {
        id: id,
        status: "completed",
      },
    });
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (mode === "ADD_TODO") {
      dispatchTodoAction({
        type: mode,
        payload: {
          text: todo,
          description: descriptionTxt,
          category: category,
          priority: priority,
          dueDate: date,
        },
      });
    } else if (mode === "EDIT_TODO") {
      dispatchTodoAction({
        type: mode,
        payload: {
          id: idTodo,
          text: todo,
          description: descriptionTxt,
          category: category,
          priority: priority,
          dueDate: date,
        },
      });
    }
  };

  useEffect(() => {
    setTextBtnHandler(mode);
  }, [mode]);
  useEffect(() => {
    // console.log("todoState: ", todoState);
  }, [todoState]);
  return (
    <div id="todo-reducer" className="content-container">
      <div id="todo-action" className="w-full">
        <h1 className="text-2xl font-bold text-header-content mb-3">Todo</h1>
        <form onSubmit={submitTodoHandler} className="flex flex-col gap-3">
          <div className="flex gap-5">
            <input
              ref={inputTodoRef}
              // autoComplete="off"
              type="text"
              placeholder={placeholderTxt}
              id="todo"
              value={todo}
              onChange={(event) => setTodoHandler(event.target.value)}
              className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-gray-200 w-full"
            />
            <input
              // autoComplete="off"
              type="text"
              placeholder="description..."
              id="todo-desc"
              value={descriptionTxt}
              onChange={(event) => setDescriptionTxtHandler(event.target.value)}
              className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-gray-200 w-full"
            />
          </div>

          <div className="flex gap-3 flex-col">
            <div className="w-full flex gap-5">
              <SelectMenu
                mode={categoryMenu.mode}
                menus={categoryMenu.menus}
                sendFilterToParent={receiveFromSelectMenu}
              />
              <SelectMenu
                mode={priorityMenu.mode}
                menus={priorityMenu.menus}
                sendFilterToParent={receiveFromSelectMenu}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <SelectDate sendDateToParent={receiveFromSelectCalendar} />
          </div>
          {/*                     */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-1/2 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-semibold px-4 py-2 rounded hover:opacity-90"
            >
              {textBtn}
            </button>
          </div>
        </form>
      </div>

      <div id="todo-container" className="w-full mt-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-3">Todo List</h2>
        <div id="todo-list" className="flex flex-col gap-3">
          {!todoState ? (
            <p className="text-gray-300 italic">No todos available.</p>
          ) : (
            todoState.todos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className={`w-full bg-gray-800 border border-gray-700 rounded p-3 flex justify-between items-center hover:cursor-pointer `}
                >
                  <div>
                    <p
                      className={`text-gray-100 font-semibold ${
                        todo.status === "completed"
                          ? "line-through decoration-green-500"
                          : ""
                      }`}
                    >
                      {todo.text}
                    </p>
                    <p
                      className={`text-sm text-gray-400 ${
                        todo.status === "completed"
                          ? "line-through decoration-green-500"
                          : ""
                      }`}
                    >
                      {todo.description}
                    </p>
                    <div className="p-3 mt-2 bg-gray-700 rounded flex items-center gap-4 w-fit">
                      <span>{todo.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <IconContext.Provider
                      value={{ className: "text-2xl cursor-pointer" }}
                    >
                      <BsGearFill
                        onClick={() => setEditHandler(todo.id)}
                        className={`${
                          todo.status === "completed"
                            ? "text-blue-900/100"
                            : "text-blue-400 hover:scale-125 hover:text-blue-300 transition duration-200"
                        }   `}
                        title="Edit Task"
                        disabled={todo.status === "completed"}
                      />

                      <IoMdCheckmark
                        onClick={() => toggleTodoHandler(todo.id)}
                        className={`${
                          todo.status === "completed"
                            ? "text-green-900/100 "
                            : "text-green-500 hover:scale-125 hover:text-green-400 transition duration-200"
                        }   `}
                        title="Remove Task"
                        disabled={todo.status === "completed"}
                      />
                      <CiSquareRemove
                        onClick={() => removeTodoHandler(todo.id)}
                        className={`${
                          todo.status === "completed"
                            ? "text-red-900/100"
                            : "text-red-500 hover:scale-125 hover:text-red-400 transition duration-200"
                        }   `}
                        title="Remove Task"
                        disabled={todo.status === "completed"}
                      />
                    </IconContext.Provider>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoReducer;
