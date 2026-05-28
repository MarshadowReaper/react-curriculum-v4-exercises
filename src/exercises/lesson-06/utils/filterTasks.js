function filterTask(tasks, filter) {
  let visibleTasks = useListFilter();

  if (filter === 'completed') {
    visibleTasks = tasks.filter((task) => task.completed);
  }

  if (filter === 'pending') {
    visibleTasks = tasks.filter((task) => !task.completed);
  }

  return visibleTasks;
}
export default filterTask;
//It skipped over this as well.
