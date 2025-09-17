import { createContext,useContext } from "react";

export const TodoContext = createContext([{
      todos : [{id : 1,
      todo : "default",
      isCompleted : false}],
      addTodo : (todo) => {},
      updateTodo : (id,todo) => {},
      deleteTodo : (id) => {},
      togggleComplete : (todo) => {}
}]);

export const useTodo = () => {
      return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider