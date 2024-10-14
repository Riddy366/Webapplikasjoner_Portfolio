import { FORM_FIELDS } from "../configs/error";
import useContactForm from "../hooks/useContactForm";
import { contactSchema } from "../schemas/contactSchema";

export default function ContactForm() {
  // Custom hook for kontakt form
  const { formData, handleChange, handleSubmit, submittedData } =
    useContactForm();

    // Håndterer validering og submit
  const handleValidationAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validerer med Zod
    const FormValidationResult = contactSchema.safeParse(formData);
    
    if (!FormValidationResult.success) {
      console.error(FormValidationResult.error.format());
      alert(`Validation failed!, ${FORM_FIELDS}`);
      return;
    }

    // Kaller submit etter vellykket validering
    handleSubmit(e);
  };

  return (
    <div>
      {/* Form for kontakt */}
      <form onSubmit={handleValidationAndSubmit} className="contact-form">
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
          <h3>Submitted data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
