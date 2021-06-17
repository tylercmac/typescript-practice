import React, { useState, Fragment } from "react";
 
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

export default function Todo(): JSX.Element {
  const [todoListItem, setTodoListItem] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(todoListItem);
    setTodoListItem("");
  };

  
    
    const addTodo = (text: string): void => {
      const newTodos: ITodo[] = [...todoList, { text, complete: false }];
      setTodoList(newTodos);
    };
    
    const completeTodo = (index: number): void => {
      const newTodos: ITodo[] = [...todoList]
      newTodos[index].complete = !newTodos[index].complete
      setTodoList(newTodos)
    }

    const removeTodo = (index: number): void => {
      const newTodos: ITodo[] = [...todoList]
      newTodos.splice(index, 1)
      setTodoList(newTodos)
    }




  return (
    <div>
      <header className="App-header">
        <h1>Todo List</h1>
        <form className="todo" onSubmit={handleSubmit}>
          {/* <label for="new-item">New item:</label> */}
          <input
            type="text"
            id="new-item"
            value={todoListItem}
            onChange={(e) => setTodoListItem(e.target.value)}
            required
          />
          <button>Add todo</button>
        </form>
        <ul>
          Items:
          {todoList.map((todo: ITodo, index: number) => {
            return (
              <Fragment key={index}>
                <li
                  style={{
                    textDecoration: todo.complete ? "line-through" : "",
                  }}
                  key={index}
                >
                  {todo.text}
                </li>
                <button onClick={() => completeTodo(index)}>
                  {todo.complete ? "Incomplete" : "Complete"}
                </button>
                <button onClick={() => removeTodo(index)}>X</button>
              </Fragment>
            );
          })}
        </ul>
      </header>
    </div>
  );
}
