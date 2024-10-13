// useContactForm.ts
import { useState } from "react";
import { FORM_FIELDS } from "../configs/error";

const useContactForm = () => {
  // UseState for form
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ser om begge feltene er fylt, hvis ikke for du opp en error vindu
    if (!formData.name || !formData.message) {
      alert(FORM_FIELDS); // error config
      return;
    }
    setSubmittedData(formData);
    setFormData({ name: "", message: "" });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    submittedData,
  };
};

export default useContactForm;
