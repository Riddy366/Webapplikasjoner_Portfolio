import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Begge feltene må fylles ut.");
      return;
    }
    setSubmittedData({ name, message });
    setName("");
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Navn:</label>
        <input
          type="text"
          id="name"
          placeholder="Skriv navnet ditt"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="message">Melding:</label>
        <textarea
          id="message"
          placeholder="Skriv en melding"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>

      {submittedData && (
        <div>
          <h3>Innsendt Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
