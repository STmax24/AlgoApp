import { useState } from 'react';
import { Send } from 'lucide-react';

const START_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    text: 'Stelle mir Fragen zu den Aufgaben oder bitte um Erklärungen.'
  }
];

export default function AIChat() {
  const [messages, setMessages] = useState(START_MESSAGES);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) {
      return;
    }
    const userMessage = { id: Date.now(), role: 'user', text: input };
    const assistantMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      text: 'Hier würdest du eine Antwort von deiner API erhalten.'
    };
    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput('');
  };

  return (
    <section className="panel chat">
      <header className="panel__header">
        <h2>KI-Chat</h2>
        <p>Integriere hier deine OpenAI-API, um Live-Erklärungen zu bekommen.</p>
      </header>
      <div className="chat__messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={message.role === 'user' ? 'chat__bubble is-user' : 'chat__bubble'}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat__input">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Deine Frage..."
        />
        <button type="button" className="primary" onClick={handleSend}>
          <Send size={16} />
          Senden
        </button>
      </div>
    </section>
  );
}
