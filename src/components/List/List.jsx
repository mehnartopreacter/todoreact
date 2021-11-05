import { Input } from "../Input/Input";
import { ListWrapper, TasksList } from "./List.styles";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Task } from "../Task/Task";
import { initTasks } from "../../common/consts";

export const List = () => {
  const [tasks, setTasks] = useState(initTasks);
  const addTodo = (taskText) => {
    const task = {
      text: taskText,
      isCompleted: false,
      id: nanoid(),
      date: new Date().toISOString().slice(0, 10),
    };
    setTasks((prev: []) => [...prev, task]);
    sortTodo();
  };
  const removeTodo = (taskId) => {
    setTasks((prev: []) => prev.filter((task) => task.id !== taskId));
  };
  const sortTodo = () => {
    setTasks((prev: []) =>
      prev
        .filter((task) => task.isCompleted === false)
        .concat(prev.filter((task) => task.isCompleted === true))
    );
  };
  const completeTodo = (taskId) => {
    setTasks((prev: []) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
    sortTodo();
  };
  return (
    <ListWrapper>
      <Input addTodo={addTodo} />
      <TasksList>
        {tasks.map((item) => {
          return (
            <Task
              task={item}
              key={item.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          );
        })}
      </TasksList>
    </ListWrapper>
  );
};
