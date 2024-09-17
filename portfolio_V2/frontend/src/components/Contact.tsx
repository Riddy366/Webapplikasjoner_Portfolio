type contactProps = {
  email: string;
};

export default function Contact({ email = "email@domene.com" }: contactProps) {
  return (
      <p>{email}</p>
  );
}
