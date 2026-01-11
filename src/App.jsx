import { useMemo, useState } from 'react';
import { BookOpen, LayoutGrid, MessageCircle, Play } from 'lucide-react';
import { DATABASE } from './data/database.js';
import TaskViewer from './components/TaskViewer.jsx';
import Structorizer from './components/Structorizer.jsx';
import TraceSimulator from './components/TraceSimulator.jsx';
import AIChat from './components/AIChat.jsx';
import TheoryList from './components/TheoryList.jsx';

const NAV_ITEMS = [
  { id: 'theory', label: 'Theorie', icon: BookOpen },
  { id: 'tasks', label: 'Aufgaben', icon: LayoutGrid },
  { id: 'sim', label: 'Trace', icon: Play },
  { id: 'chat', label: 'KI-Chat', icon: MessageCircle }
];

export default function App() {
  const [activeView, setActiveView] = useState('theory');
  const [selectedTaskId, setSelectedTaskId] = useState(DATABASE.tasks[0]?.id ?? null);

  const selectedTask = useMemo(
    () => DATABASE.tasks.find((task) => task.id === selectedTaskId) ?? null,
    [selectedTaskId]
  );

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="eyebrow">AlgoApp</p>
          <h1>Algorithmen lernen – strukturiert & visuell</h1>
          <p className="subhead">
            Theorie, Aufgaben und Simulationen aus deinem Repository – kompakt in einer App.
          </p>
        </div>
        <nav className="nav">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={activeView === item.id ? 'nav__button is-active' : 'nav__button'}
                onClick={() => setActiveView(item.id)}
                type="button"
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>

      <main className="app__content">
        {activeView === 'theory' && <TheoryList theory={DATABASE.theory} />}
        {activeView === 'tasks' && (
          <TaskViewer
            tasks={DATABASE.tasks}
            selectedTaskId={selectedTaskId}
            onSelectTask={setSelectedTaskId}
          />
        )}
        {activeView === 'sim' && (
          <div className="grid">
            <TraceSimulator task={selectedTask} />
            <Structorizer task={selectedTask} />
          </div>
        )}
        {activeView === 'chat' && <AIChat />}
      </main>
    </div>
  );
}
