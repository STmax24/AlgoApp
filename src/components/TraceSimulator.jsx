import { Play } from 'lucide-react';

export default function TraceSimulator({ task }) {
  return (
    <section className="panel">
      <header className="panel__header">
        <h2>Trace-Simulator</h2>
        <p>Spiele Beispielspuren aus der Aufgaben-Datenbank durch.</p>
      </header>
      {task ? (
        <div className="trace">
          <h3>{task.title}</h3>
          <p className="muted">{task.text}</p>
          <ol className="trace__list">
            {task.trace.map((entry, index) => (
              <li key={`${entry.l}-${index}`}>
                <span className="trace__badge">L{entry.l}</span>
                <span>{entry.v}</span>
              </li>
            ))}
          </ol>
          <button className="primary" type="button">
            <Play size={16} /> Simulation starten
          </button>
        </div>
      ) : (
        <p>Wähle eine Aufgabe aus, um die Trace zu sehen.</p>
      )}
    </section>
  );
}
