function TaskItem({ task }) {
  return (
    <li>
      {task.title} {task.isCompleted ? '✅' : '⏳'}
    </li>
  );
}

export default TaskItem;
