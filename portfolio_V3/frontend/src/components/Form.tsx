import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Sjekker om Feltene til form blir fylt ut
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      return alert("Begge feltene må fylles ut.");
    }
    // Resetter formen
    setSubmittedData(formData);
    setFormData({ name: "", message: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Navn:</label>
        <input
          type="text"
          name="name"
          placeholder="Skriv navnet ditt"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="message">Melding:</label>
        <textarea
          name="message"
          placeholder="Skriv en melding"
          value={formData.message}
          onChange={handleChange}
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
