import ReactMarkdown from 'react-markdown';

export default function TheoryList({ theory }) {
  return (
    <section className="panel">
      <header className="panel__header">
        <h2>Theorie-Module</h2>
        <p>Alle Grundlagenkapitel aus der Datenbank mit kompaktem Markdown.</p>
      </header>
      <div className="theory-grid">
        {theory.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.id} className="card">
              <div className="card__header">
                <Icon size={20} />
                <h3>{item.title}</h3>
              </div>
              <ReactMarkdown className="card__content">{item.content}</ReactMarkdown>
            </article>
          );
        })}
      </div>
    </section>
  );
}
