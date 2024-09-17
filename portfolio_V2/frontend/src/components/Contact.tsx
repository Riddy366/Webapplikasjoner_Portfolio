type contactProps = {
  email: string;
};

export default function Contact({ email = "email@domene.com" }: contactProps) {
  return (
    <>
      <h2>Contact</h2>
      <p>{email}</p>
    </>
  );
}
