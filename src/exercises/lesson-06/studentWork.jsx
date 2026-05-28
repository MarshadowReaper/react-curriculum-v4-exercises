import { useState } from 'react';
import TaskItem from './components/TaskItem';
import FilterControl from './utils/FilterControl';
import useTasks from './hooks/useTasks';
import filterTasks from './utils/filterTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();

  // #2: Filtering logic inside component

  const [filter, setFilter] = useState('all');
  let visibleTasks = filterTasks(tasks, filter);
  if (loading) {
    return <p>Loading tasks...</p>;
  }
  //For some unknown reason Git didn't want to add this.
  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <h2>Welcome, Student</h2>

      {/* #4: Repeated button JSX */}
      <FilterControl filter={filter} setFilter={setFilter} />

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
