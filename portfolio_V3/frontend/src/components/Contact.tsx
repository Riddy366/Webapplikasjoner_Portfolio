type ContactProps = {
  email: string;
};

export default function Contact({ email = "email@domene.com" }: ContactProps) {
  const contactInfo = [
    {
      name: "Navn",
      degree: "Utdanning",
    },
  ];

  return (
    <>
      <h2>Contact</h2>
      <p>{email}</p>
      {contactInfo.map((contact, index) => (
        <button
          key={index}
          className="contact-button"
          onClick={() =>
            alert(
              `Email: ${email}\nNavn: ${contact.name} \nUtdanning: ${contact.degree}`
            )
          }
        >
          Click Me
        </button>
      ))}
    </>
  );
}
