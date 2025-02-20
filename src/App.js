import { useState } from "react";
import initialTodos from "./todos";
import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const setDone = (key) => {
    const newTodos = [...todos];
    const deed = newTodos.find((current) => current.key === key);
    if (deed) deed.done = true;
    setTodos(newTodos);
  };
  const del = (key) => {
    const newTodos = todos.filter((current) => current.key !== key);
    setTodos(newTodos);
  };
  const add = (deed) => {
    setTodos([...todos, deed]);
  };
  return (
    <div className="container">
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              "navbar-item is uppercase" + (isActive ? " is-active" : "")
            }
          >
            Todos
          </NavLink>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              to={"/add"}
              className={({ isActive }) =>
                "navbar-item" + (isActive ? " is-active" : "")
              }
            >
              Создать дело
            </NavLink>
          </div>
        </div>
      </nav>
      <main className="content px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}
