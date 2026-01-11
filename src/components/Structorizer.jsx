import { useMemo } from 'react';
import { PenSquare } from 'lucide-react';

export default function Structorizer({ task }) {
  const template = useMemo(() => {
    if (!task) {
      return '';
    }
    return task.solution_steps.join('\n');
  }, [task]);

  return (
    <section className="panel">
      <header className="panel__header">
        <h2>Struktogramm-Notiz</h2>
        <p>Nutze die Lösungsschritte als Grundlage für dein Struktogramm.</p>
      </header>
      <div className="structorizer">
        <div className="structorizer__label">
          <PenSquare size={16} />
          <span>Vorschlag aus der Lösung</span>
        </div>
        <textarea
          defaultValue={template}
          placeholder="Schreibe hier dein Struktogramm..."
          rows={12}
        />
        <button className="primary" type="button">
          Fortschritt speichern
        </button>
      </div>
    </section>
  );
}
