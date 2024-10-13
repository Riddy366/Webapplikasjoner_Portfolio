import useContactForm from "../hooks/useContactForm";

export default function ContactForm() {
  // custom hook for kontakt form
  const { formData, handleChange, handleSubmit, submittedData } =
    useContactForm();

  return (
    <div>
      {/* Form for kontakt */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Navn:</label>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send message</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted data::</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
