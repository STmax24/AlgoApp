import { useMemo, useState } from 'react';
import { CheckCircle, ListFilter } from 'lucide-react';

const DIFFICULTY_LABELS = {
  1: 'Einfach',
  2: 'Mittel',
  3: 'Schwer'
};

export default function TaskViewer({ tasks, selectedTaskId, onSelectTask }) {
  const [moduleFilter, setModuleFilter] = useState('alle');
  const [difficultyFilter, setDifficultyFilter] = useState('alle');

  const modules = useMemo(() => {
    const unique = new Set(tasks.map((task) => task.module));
    return ['alle', ...unique];
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const moduleOk = moduleFilter === 'alle' || task.module === moduleFilter;
      const diffOk =
        difficultyFilter === 'alle' || String(task.diff) === String(difficultyFilter);
      return moduleOk && diffOk;
    });
  }, [tasks, moduleFilter, difficultyFilter]);

  const selectedTask = tasks.find((task) => task.id === selectedTaskId) ?? null;

  return (
    <section className="panel">
      <header className="panel__header">
        <h2>Aufgabenpool</h2>
        <p>Filtere nach Modul und Schwierigkeitsgrad, um passende Übungen zu finden.</p>
      </header>

      <div className="filters">
        <label>
          Modul
          <select value={moduleFilter} onChange={(event) => setModuleFilter(event.target.value)}>
            {modules.map((module) => (
              <option key={module} value={module}>
                {module}
              </option>
            ))}
          </select>
        </label>
        <label>
          Schwierigkeit
          <select
            value={difficultyFilter}
            onChange={(event) => setDifficultyFilter(event.target.value)}
          >
            <option value="alle">Alle</option>
            <option value="1">Einfach</option>
            <option value="2">Mittel</option>
            <option value="3">Schwer</option>
          </select>
        </label>
      </div>

      <div className="task-layout">
        <div className="task-list">
          {filteredTasks.map((task) => (
            <button
              key={task.id}
              className={task.id === selectedTaskId ? 'task-item is-active' : 'task-item'}
              onClick={() => onSelectTask(task.id)}
              type="button"
            >
              <span className="task-item__title">{task.title}</span>
              <span className="task-item__meta">
                <ListFilter size={14} /> {task.module} ·{' '}
                {DIFFICULTY_LABELS[task.diff] ?? task.diff}
              </span>
            </button>
          ))}
        </div>

        <div className="task-detail">
          {selectedTask ? (
            <>
              <h3>{selectedTask.title}</h3>
              <p className="task-detail__meta">
                <ListFilter size={16} /> {selectedTask.module}
              </p>
              <p className="task-detail__text">{selectedTask.text}</p>
              <div>
                <h4>Lösungsschritte</h4>
                <ul>
                  {selectedTask.solution_steps.map((step) => (
                    <li key={step}>
                      <CheckCircle size={14} /> {step}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p>Wähle eine Aufgabe aus der Liste.</p>
          )}
        </div>
      </div>
    </section>
  );
}
