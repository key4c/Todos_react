import {
  createBrowserRouter,
  createRoutesFromElements,
  Form,
  Route,
} from "react-router-dom";
import App from "./App";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { getTodos, addTodo } from "./api.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<TodoList />} loader={getTodos} />
      <Route path="add" element={<TodoAdd />} action={addTodo} />
    </Route>
  )
);
export default router;
