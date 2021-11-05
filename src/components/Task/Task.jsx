import { TaskWrapper, TaskText, DelButton, Date } from './Task.styles';

export const Task = ({ task, removeTodo, completeTodo }) => {
  return (
    <TaskWrapper isCompleted={task.isCompleted}>
      <input
        onChange={() => completeTodo(task.id)}
        type="checkbox"
        checked={task.isCompleted}
      />
      <Date>{task.date}</Date>
      <TaskText>{task.text}</TaskText>
      <DelButton onClick={() => removeTodo(task.id)}>x</DelButton>
    </TaskWrapper>
  );
};
